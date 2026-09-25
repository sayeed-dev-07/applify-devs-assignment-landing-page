"use client";
import React from 'react';

import { ChatHero } from './_components/ChatHero';
import { ChatSuggestions } from './_components/ChatSuggestions';
import { ChatInputArea } from './_components/ChatInputArea';

const ChatContainer = () => {
  return (
    <div className="relative flex h-full min-h-0 w-full flex-col overflow-hidden bg-background">

      <div className="flex min-h-0 w-full flex-1 flex-col items-center justify-start overflow-y-auto px-2 pb-3 pt-6 sm:px-6 md:p-10">
        <div className="my-0 flex w-full max-w-3xl flex-col items-center py-6 md:my-auto ">

          <ChatHero />
          <ChatSuggestions />

        </div>
      </div>

      <ChatInputArea />

    </div>
  );
};

export default ChatContainer;
