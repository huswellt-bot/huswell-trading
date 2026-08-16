import { siMessenger, siViber, siWhatsapp } from "simple-icons";
import { CONTACT } from "@/lib/site-data";

export default function ChatButtons() {
  return (
    <div className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] z-50 flex flex-col gap-3">
      <ChatLinks />
    </div>
  );
}

function ChatLinks() {
  return (
    <>
      <a
        href={CONTACT.messenger}
        target="_blank"
        rel="noreferrer"
        aria-label={`Chat with ${CONTACT.name} on Messenger`}
        title={`Chat with ${CONTACT.name} on Messenger`}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0084FF] text-white shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grease"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
          <path d={siMessenger.path} />
        </svg>
      </a>
      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label={`Chat with ${CONTACT.name} on WhatsApp`}
        title={`Chat with ${CONTACT.name} on WhatsApp`}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grease"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
          <path d={siWhatsapp.path} />
        </svg>
      </a>
      <a
        href={CONTACT.viber}
        aria-label={`Chat with ${CONTACT.name} on Viber`}
        title={`Chat with ${CONTACT.name} on Viber`}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7360F2] text-white shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grease"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
          <path d={siViber.path} />
        </svg>
      </a>
    </>
  );
}
