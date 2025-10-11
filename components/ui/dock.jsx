"use client";
import * as React from "react"
import { useRef } from "react"

import { cn } from "@/lib/utils"

export const scaleValue = function(value, from, to) {
  const scale = (to[1] - to[0]) / (from[1] - from[0])
  const capped = Math.min(from[1], Math.max(from[0], value)) - from[0]
  return Math.floor(capped * scale + to[0]);
}

export function DockIcon({
  className,
  src,
  href,
  name,
  handleIconHover,
  children,
  iconSize,
  target,
  rel
}) {
  const ref = useRef(null)

  return (
    <>
      <style jsx>
        {`
          .icon:hover + .icon {
            width: calc(
              var(--icon-size) * 1.33 + var(--dock-offset-right, 0px)
            );
            height: calc(
              var(--icon-size) * 1.33 + var(--dock-offset-right, 0px)
            );
            margin-top: calc(
              var(--icon-size) * -0.33 + var(--dock-offset-right, 0) * -1
            );
          }

          .icon:hover + .icon + .icon {
            width: calc(
              var(--icon-size) * 1.17 + var(--dock-offset-right, 0px)
            );
            height: calc(
              var(--icon-size) * 1.17 + var(--dock-offset-right, 0px)
            );
            margin-top: calc(
              var(--icon-size) * -0.17 + var(--dock-offset-right, 0) * -1
            );
          }

          .icon:has(+ .icon:hover) {
            width: calc(var(--icon-size) * 1.33 + var(--dock-offset-left, 0px));
            height: calc(
              var(--icon-size) * 1.33 + var(--dock-offset-left, 0px)
            );
            margin-top: calc(
              var(--icon-size) * -0.33 + var(--dock-offset-left, 0) * -1
            );
          }

          .icon:has(+ .icon + .icon:hover) {
            width: calc(var(--icon-size) * 1.17 + var(--dock-offset-left, 0px));
            height: calc(
              var(--icon-size) * 1.17 + var(--dock-offset-left, 0px)
            );
            margin-top: calc(
              var(--icon-size) * -0.17 + var(--dock-offset-left, 0) * -1
            );
          }
        `}
      </style>
      <li
        ref={ref}
        style={
          {
            transition:
              "width, height, margin-top, cubic-bezier(0.25, 1, 0.5, 1) 150ms",

            "--icon-size": `${iconSize}px`
          }
        }
        onMouseMove={handleIconHover}
        className={cn(
          "icon group/li flex h-[var(--icon-size)] w-[var(--icon-size)] cursor-pointer items-center justify-center px-[calc(var(--icon-size)*0.075)] hover:-mt-[calc(var(--icon-size)/2)] hover:h-[calc(var(--icon-size)*1.5)] hover:w-[calc(var(--icon-size)*1.5)] [&_img]:object-contain",
          className
        )}>
        <a
          href={href}
          target={target}
          rel={rel}
          className="group/a relative aspect-square w-full rounded-[10px] border border-gray-100 bg-gradient-to-t from-neutral-100 to-white p-1.5 shadow-[rgba(0,_0,_0,_0.05)_0px_1px_0px_inset] after:absolute after:inset-0 after:rounded-[inherit] after:shadow-md after:shadow-zinc-800/10 dark:border-zinc-900 dark:from-zinc-900 dark:to-zinc-800 dark:shadow-[rgba(255,_255,_255,_0.3)_0px_1px_0px_inset]">
          <span
            className="absolute top-[-40px] left-1/2 -translate-x-1/2 rounded-md border border-gray-100 bg-gradient-to-t from-neutral-100 to-white p-1 px-2 text-xs whitespace-nowrap text-black opacity-0 transition-opacity duration-200 group-hover/li:opacity-100 dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-800 dark:text-white">
            {name}
          </span>
          {src ? (
            <img 
              src={src} 
              alt={name} 
              className="h-full w-full rounded-[inherit]" 
              onLoad={() => console.log(`Image loaded successfully: ${src}`)}
              onError={(e) => console.error(`Failed to load image: ${src}`, e)}
            />
          ) : (
            children
          )}
        </a>
      </li>
    </>
  );
}

export function Dock({
  className,
  children,
  maxAdditionalSize = 5,
  iconSize = 55
}) {
  const dockRef = useRef(null)

  const handleIconHover = (e) => {
    if (!dockRef.current) return
    const mousePos = e.clientX
    const iconPosLeft = e.currentTarget.getBoundingClientRect().left
    const iconWidth = e.currentTarget.getBoundingClientRect().width

    const cursorDistance = (mousePos - iconPosLeft) / iconWidth
    const offsetPixels = scaleValue(cursorDistance, [0, 1], [maxAdditionalSize * -1, maxAdditionalSize])

    dockRef.current.style.setProperty("--dock-offset-left", `${offsetPixels * -1}px`)

    dockRef.current.style.setProperty("--dock-offset-right", `${offsetPixels}px`)
  }

  return (
    <nav ref={dockRef} role="navigation" aria-label="Main Dock">
      <ul
        className={cn(
          "flex items-center rounded-xl border border-gray-100 bg-gradient-to-t from-neutral-50 to-white p-1 dark:border-zinc-900 dark:from-zinc-950 dark:to-zinc-900",
          className
        )}>
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(child, {
                handleIconHover,
                iconSize,
              })
            : child)}
      </ul>
    </nav>
  );
}
