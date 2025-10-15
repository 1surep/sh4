'use client';

import React, { useEffect, useRef } from 'react';
import PanAfricaNavbar from './PanAfricaNavbar';
import Footer from '../Footer';

export default function PanAfricaPage() {
    const countdownRef = useRef(null);

    useEffect(() => {
        // FlipClock implementation
        const FlipClock = function (options) {
            this.tickInterval = false;
            this.digitSelectors = [];
            this.options = this.createConfig(options);

            this.init();
        };

        FlipClock.prototype.createConfig = function(options) {
            return Object.assign({}, this.getDefaultConfig(), options);
        };

        FlipClock.prototype.getDefaultConfig = function() {
            return {
                tickDuration: 1000,
                isCountdown: true,
                startTime: '31:00:00:05',
                maxTime: '23:59:59',
                minTime: '00:00:00',
                containerElement: countdownRef.current,
                segmentSelectorPrefix: 'flipclock-',
                face: {
                    days: {
                        maxValue: 31
                    },
                    hours: {
                        maxValue: 23
                    },
                    minutes: {
                        maxValue: 59
                    },
                    seconds: {
                        maxValue: 59
                    }
                }
            };
        };

        FlipClock.prototype.initFeatureDetection = function() {
            // Check for CSS transition support
            const testEl = document.createElement('div');
            const style = testEl.style;
            return style.transition !== undefined || 
                   style.WebkitTransition !== undefined || 
                   style.MozTransition !== undefined || 
                   style.MsTransition !== undefined || 
                   style.OTransition !== undefined;
        };

        FlipClock.prototype.isFeatureSupported = function(feature) {
            return this.initFeatureDetection();
        };

        FlipClock.prototype.init = function() {
            if (this.options.containerElement) {
                this.options.containerElement.innerHTML = '';
            }

            if (this.tickInterval !== false) {
                clearInterval(this.tickInterval);
                this.tickInterval = false;
            }

            this.appendMarkupToContainer();
            this.setDimensions();
            this.setupFallbacks();
            this.start();
        };

        FlipClock.prototype.setupFallbacks = function() {
            const hasTransition = this.isFeatureSupported('transition');
            
            if (hasTransition) {
                const firstChild = this.options.containerElement.querySelector('ul.flip li:first-child');
                if (firstChild) {
                    firstChild.style.zIndex = '2';
                }
            } else {
                const firstChild = this.options.containerElement.querySelector('ul.flip li:first-child');
                if (firstChild) {
                    firstChild.style.zIndex = '3';
                }
                
                // Add fallback class for IE
                const flipElements = this.options.containerElement.querySelectorAll('ul.flip:nth-child(2n+2):not(:last-child)');
                flipElements.forEach(el => el.classList.add('nth-child-2np2-notlast'));
            }
        };

        FlipClock.prototype.setDimensions = function() {
            // Let CSS handle the responsive dimensions
            // This method is kept for compatibility but dimensions are now handled by CSS media queries
            const flipElements = this.options.containerElement.querySelectorAll('ul.flip');
            flipElements.forEach(el => {
                // Remove any inline styles that might interfere with CSS
                el.style.width = '';
                el.style.fontSize = '';
                
                const liElements = el.querySelectorAll('li');
                liElements.forEach(li => {
                    li.style.lineHeight = '';
                });
            });
        };

        FlipClock.prototype.createSegment = function(faceSegmentGroupName) {
            const faceSegmentGroup = this.options.face[faceSegmentGroupName];
            const segmentSelectorAddons = ['-ten', '-one'];
            const rounded = Math.ceil(faceSegmentGroup.maxValue / 10);
            let segment = [];

            if (faceSegmentGroup.maxValue / 10 > 1) {
                segment = [
                    {
                        selector: this.options.segmentSelectorPrefix + faceSegmentGroupName + segmentSelectorAddons[0],
                        ticks: rounded
                    },
                    {
                        selector: this.options.segmentSelectorPrefix + faceSegmentGroupName + segmentSelectorAddons[1],
                        ticks: 10
                    }
                ];
            } else {
                segment = [
                    {
                        selector: this.options.segmentSelectorPrefix + faceSegmentGroupName + segmentSelectorAddons[1],
                        ticks: 10
                    }
                ];
            }

            return segment;
        };

        FlipClock.prototype.appendMarkupToContainer = function() {
            let baseZIndex = 0;
            
            for (const faceSegmentGroup in this.options.face) {
                this.options.face[faceSegmentGroup].segments = this.createSegment(faceSegmentGroup);

                for (let i = 0; i < this.options.face[faceSegmentGroup].segments.length; i++) {
                    const faceSegmentElement = this.createFaceSegment(this.options.face[faceSegmentGroup].segments[i]);

                    this.digitSelectors.push(this.options.face[faceSegmentGroup].segments[i].selector);
                    this.options.containerElement.appendChild(faceSegmentElement);

                    faceSegmentElement.setAttribute('data-face-segment-group', faceSegmentGroup);
                    faceSegmentElement.classList.add(faceSegmentGroup);
                    faceSegmentElement.style.zIndex = baseZIndex++;
                }
            }

            this.digitSelectors.reverse();
        };

        FlipClock.prototype.createFaceSegment = function(faceSegment) {
            const faceElement = document.createElement('ul');
            faceElement.className = 'flip ' + faceSegment.selector;

            for (let i = 0; i < faceSegment.ticks; i++) {
                const digit = i;
                faceElement.appendChild(this.createFaceDigit(digit));
            }

            return faceElement;
        };

        FlipClock.prototype.createFaceDigit = function(digit) {
            const digitInnerFragment = '<div class="shadow"></div><div class="inn">' + digit + '</div>';
            const li = document.createElement('li');
            li.setAttribute('data-digit', digit);
            li.innerHTML = '<span>' +
                '<div class="up">' + digitInnerFragment + '</div>' +
                '<div class="down">' + digitInnerFragment + '</div>' +
                '</span>';
            return li;
        };

        FlipClock.prototype.start = function() {
            this.setToTime(this.options.startTime);

            const self = this;
            this.tickInterval = setInterval(function () {
                self.tick();
            }, this.options.tickDuration);
        };

        FlipClock.prototype.stop = function() {
            clearInterval(this.tickInterval);
        };

        FlipClock.prototype.resetDigits = function() {
            this.options.containerElement.classList.remove('play');

            for (let i = 0; i < this.digitSelectors.length; i++) {
                const active = this.options.containerElement.querySelector(this.getDigitSelectorByIndex(i) + '.current');
                const all = this.options.containerElement.querySelectorAll(this.getDigitSelectorByIndex(i));
                const first = this.options.containerElement.querySelector(this.getDigitSelectorByIndex(i) + ':first-child');

                if (all[0]) all[0].classList.add('clockFix');
                all.forEach(el => el.classList.remove('current'));

                if (first) first.classList.add('current');
                all.forEach(el => el.classList.remove('previous'));
                if (active) active.classList.add('previous');
            }

            this.options.containerElement.classList.add('play');
        };

        FlipClock.prototype.setToTime = function(time) {
            const timeArray = time.replace(/:/g, '').split('').reverse();

            for (let i = 0; i < this.digitSelectors.length; i++) {
                const digit = this.options.containerElement.querySelectorAll(this.getDigitSelectorByIndex(i))[parseInt(timeArray[i])];

                this.options.containerElement.classList.remove('play');

                if (digit) {
                    digit.classList.add('current');
                }
                this.options.containerElement.classList.add('play');
            }
        };

        FlipClock.prototype.setFaceSegmentGroupMaxValue = function(segmentGroupName) {
            const self = this;
            const group = this.getFaceSegmentGroupDom(segmentGroupName);

            group.forEach((el, idx) => {
                self.options.containerElement.classList.remove('play');

                const maxValue = self.options.face[segmentGroupName].maxValue.toString().split('');

                const currentLi = el.querySelector('li.current');
                if (currentLi) currentLi.classList.remove('current');
                
                const targetLi = el.querySelector('li[data-digit="' + maxValue[idx] + '"]');
                if (targetLi) targetLi.classList.add('current');

                self.options.containerElement.classList.add('play');
            });
        };

        FlipClock.prototype.tick = function() {
            this.doTick(0);
        };

        FlipClock.prototype.getCurrentTime = function() {
            const currentTime = [];
            const currentElements = this.options.containerElement.querySelectorAll('li.current');
            
            currentElements.forEach(el => {
                currentTime.push(el.getAttribute('data-digit'));
            });

            return parseInt(currentTime.join(''), 10);
        };

        FlipClock.prototype.getDigitSelectorByIndex = function(digitIndex) {
            return 'ul.' + this.digitSelectors[digitIndex] + ' li';
        };

        FlipClock.prototype.getFaceSegmentGroupNameByDigitElement = function(digitElement) {
            return digitElement.parentElement.getAttribute('data-face-segment-group');
        };

        FlipClock.prototype.getFaceSegmentByDigitElement = function(digitElement) {
            return this.options.face[this.getFaceSegmentGroupNameByDigitElement(digitElement)];
        };

        FlipClock.prototype.getFaceSegmentGroupDom = function(segmentGroupName) {
            return Array.from(this.options.containerElement.querySelectorAll('.' + segmentGroupName));
        };

        FlipClock.prototype.getCurrentDigitDom = function(segmentGroupName) {
            return Array.from(this.options.containerElement.querySelectorAll('.' + segmentGroupName + ' li.current'));
        };

        FlipClock.prototype.getCurrentFaceSegmentGroupValue = function(digitElement) {
            const segmentGroupName = this.getFaceSegmentGroupNameByDigitElement(digitElement);
            const values = [];

            this.getCurrentDigitDom(segmentGroupName).forEach((el, idx) => {
                values[idx] = el.getAttribute('data-digit');
            });

            return values.join('');
        };

        FlipClock.prototype.doTick = function(digitIndex) {
            let nextDigit, pseudoSelector;

            if (this.options.isCountdown === false && this.isMaxTimeReached()) {
                this.resetDigits();
                return;
            }

            this.options.containerElement.classList.remove('play');

            if (this.options.isCountdown === true) {
                pseudoSelector = ':first-child';
            } else {
                pseudoSelector = ':last-child';
            }

            let activeDigit = this.options.containerElement.querySelector(this.getDigitSelectorByIndex(digitIndex) + '.current');

            if (!activeDigit) {
                if (this.options.isCountdown) {
                    activeDigit = this.options.containerElement.querySelector(this.getDigitSelectorByIndex(digitIndex) + ':last-child');
                    nextDigit = activeDigit?.previousElementSibling;
                } else {
                    activeDigit = this.options.containerElement.querySelectorAll(this.getDigitSelectorByIndex(digitIndex))[0];
                    nextDigit = activeDigit?.nextElementSibling;
                }

                if (activeDigit) {
                    activeDigit.classList.add('previous');
                    activeDigit.classList.remove('current');
                }

                if (nextDigit) {
                    nextDigit.classList.add('current');
                }
            } else if (activeDigit.matches(pseudoSelector)) {
                const allDigits = this.options.containerElement.querySelectorAll(this.getDigitSelectorByIndex(digitIndex));
                allDigits.forEach(el => el.classList.remove('previous'));

                if (this.options.isCountdown === true && this.isMinTimeReached()) {
                    this.stop();
                    return;
                }

                activeDigit.classList.add('previous');
                activeDigit.classList.remove('current');

                if (this.options.isCountdown === true) {
                    activeDigit.classList.add('countdownFix');
                    activeDigit = this.options.containerElement.querySelector(this.getDigitSelectorByIndex(digitIndex) + ':last-child');
                } else {
                    activeDigit = this.options.containerElement.querySelectorAll(this.getDigitSelectorByIndex(digitIndex))[0];
                    activeDigit.classList.add('clockFix');
                }

                if (activeDigit) {
                    activeDigit.classList.add('current');
                }

                if (typeof this.digitSelectors[digitIndex + 1] !== 'undefined') {
                    this.doTick(digitIndex + 1);
                }
            } else {
                const allDigits = this.options.containerElement.querySelectorAll(this.getDigitSelectorByIndex(digitIndex));
                allDigits.forEach(el => el.classList.remove('previous'));

                activeDigit.classList.add('previous');
                activeDigit.classList.remove('current');

                if (this.options.isCountdown === true) {
                    nextDigit = activeDigit.previousElementSibling;
                } else {
                    nextDigit = activeDigit.nextElementSibling;
                }

                if (nextDigit) {
                    nextDigit.classList.add('current');
                }
            }

            const group = this.getFaceSegmentByDigitElement(activeDigit);
            if (group && this.getCurrentFaceSegmentGroupValue(activeDigit) > group.maxValue) {
                this.setFaceSegmentGroupMaxValue(this.getFaceSegmentGroupNameByDigitElement(activeDigit));
            }

            this.options.containerElement.classList.add('play');
            this.cleanZIndexFix(activeDigit, this.digitSelectors[digitIndex]);
        };

        FlipClock.prototype.isMaxTimeReached = function() {
            return this.getCurrentTime() >= parseInt(this.options.maxTime.replace(/:/g, ''), 10);
        };

        FlipClock.prototype.isMinTimeReached = function() {
            return this.getCurrentTime() <= parseInt(this.options.minTime.replace(/:/g, ''), 10);
        };

        FlipClock.prototype.cleanZIndexFix = function(activeDigit, selector) {
            if (this.options.isCountdown === true) {
                const fix = this.options.containerElement.querySelector('.' + selector + ' .countdownFix');

                if (fix && !fix.classList.contains('previous') && !fix.classList.contains('current')) {
                    fix.classList.remove('countdownFix');
                }
            } else {
                const siblings = activeDigit.parentElement.children;
                Array.from(siblings).forEach(sibling => sibling.classList.remove('clockFix'));
            }
        };

        // Initialize the countdown when component mounts
        if (countdownRef.current) {
            new FlipClock({
                isCountdown: true,
                startTime: '31:00:00:05',
                containerElement: countdownRef.current,
                face: {
                    days: {
                        maxValue: 31
                    },
                    hours: {
                        maxValue: 23
                    },
                    minutes: {
                        maxValue: 59
                    },
                    seconds: {
                        maxValue: 59
                    }
                }
            });
        }

        // Cleanup on unmount
        return () => {
            if (countdownRef.current) {
                countdownRef.current.innerHTML = '';
            }
        };
    }, []);

    return (
      <>
        {/* Navbar PAN 2027 */}
        <PanAfricaNavbar />

        {/* main body of PAN 2027 */}
        <main className='min-h-screen bg-yellow-50'>
            <div className="container">
                <div className="countdown" ref={countdownRef} />
            </div>

            {/* <div className='pt-32'>
              Hello meeeeeeeeeeeeee
            </div> */}
        </main>

        {/* Footer PAN 2027 */}
        {/* <Footer /> */}
      </>
    );
}