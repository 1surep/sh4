 'use client';
 
import React, { useEffect, useState } from "react";
 import { useAuth } from "@/app/context/AuthContext";
 import { useRouter } from "next/navigation";
import Image from "next/image";
 
 const InboxPage = () => {
   const { user, loading } = useAuth();
   const router = useRouter();
   const [messages, setMessages] = useState([]);
   const [loadingMessages, setLoadingMessages] = useState(true);
   const [error, setError] = useState("");
  const [expandedId, setExpandedId] = useState(null);
 
   useEffect(() => {
     if (!loading && !user) {
       router.push('/signin');
     }
   }, [user, loading, router]);
 
   const loadMessages = async () => {
     try {
       const res = await fetch('/api/contact', { cache: 'no-store' });
       const data = await res.json();
       if (!res.ok) throw new Error(data?.message || 'Failed to load messages');
       setMessages(Array.isArray(data) ? data : []);
     } catch (err) {
       setError(err.message || 'Failed to load messages');
     } finally {
       setLoadingMessages(false);
     }
   };
 
   useEffect(() => {
     if (!loading && user) {
       loadMessages();
     }
   }, [loading, user]);
 
  // No read/unread state changes; just expand/collapse
 
  const onOpenMessage = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };
 
  const filteredMessages = messages;
 
   if (loading) {
     return (
       <div className="min-h-screen bg-gray-100 flex items-center justify-center">
         <div className="text-center">
           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
           <p className="mt-4 text-gray-600">Loading...</p>
         </div>
       </div>
     );
   }
 
   if (!user) return null;
 
   return (
     <div className="min-h-screen bg-gray-100 py-12 px-[1rem] lg:px-[3rem]">
      <div className="flex justify-center items-center rounded-full mb-6">
        <Image
          src="/logo.jpg"
          alt="kennel logo"
          width={100}
          height={100}
          className="rounded-full"
        />
      </div>
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
           <h1 className="text-2xl lg:text-4xl font-bold text-gray-800">SH4 Inbox</h1>
           <p className="text-gray-600">Messages submitted from the website form</p>
         </div>
        <div className="flex items-center gap-2">
          <button
            className="text-sm px-3 py-2 rounded bg-gray-200 hover:bg-gray-300 text-gray-800 cursor-pointer"
            onClick={() => router.push('/dashboard')}
          >
            Back to Dashboard
          </button>
        </div>
       </div>
 
       <div className="space-y-3">
         {loadingMessages ? (
           <div className="bg-white rounded-xl shadow p-4 text-gray-600">Loading messages...</div>
         ) : error ? (
           <div className="bg-white rounded-xl shadow p-4 text-red-600">{error}</div>
         ) : filteredMessages.length === 0 ? (
           <div className="bg-white rounded-xl shadow p-4 text-gray-600">No messages.</div>
         ) : (
           filteredMessages.map((m) => {
             const isExpanded = expandedId === m._id;
             return (
               <div
                key={m._id}
                className={"rounded-xl shadow border bg-white border-gray-200 overflow-hidden"}
               >
                <button
                   className="w-full text-left p-4 flex items-start gap-3 hover:bg-gray-50"
                  onClick={() => onOpenMessage(m._id)}
                 >
                  <div className="mt-1 h-2 w-2 rounded-full bg-gray-300" />
                   <div className="flex-1 min-w-0">
                     <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                       <span className="font-semibold text-gray-800 truncate">{m.hashhandle}</span>
                       <span className="text-gray-500">•</span>
                       <span className="text-gray-600 truncate">{m.email}</span>
                       <span className="text-gray-500 hidden sm:inline">•</span>
                       <span className="text-gray-700 truncate max-w-[40ch]">{m.subject || 'No subject'}</span>
                     </div>
                     <div className="text-xs text-gray-500">{new Date(m.createdAt || m.updatedAt).toLocaleString()}</div>
                   </div>
                  <div />
                 </button>
                 {isExpanded && (
                   <div className="px-4 pb-4">
                     <div className="border-t border-gray-200 pt-3 whitespace-pre-wrap text-gray-800  text-sm">{m.message}</div>
                     <div className="mt-3 flex items-center gap-2">
                      <button
                        className="text-sm px-3 py-1 rounded bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 cursor-pointer"
                        onClick={() => setExpandedId(null)}
                      >
                         Close
                       </button>
                     </div>
                   </div>
                 )}
               </div>
             );
           })
         )}
       </div>
     </div>
   );
 };
 
 export default InboxPage;
 
