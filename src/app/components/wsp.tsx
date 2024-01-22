import Image from "next/image";
import Link from "next/link";

export default function WspButton() {
  const phoneNumber = "+5493516957869";
  const message = "Hola! quería hacer una consulta sobre Casco Blanco.";

  const whatsappLink = `https://api.whatsapp.com/send?phone=${encodeURIComponent(phoneNumber)}&text=${encodeURI(message)}`;

  return (
    <>
      <div>
        <Link
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/img/whatsapp.png"
            alt="whatsapp"
            width={300}
            height={150}
            className="fixed hidden md:block bottom-4 right-4 rounded-full cursor-pointer"
          />
          <Image
            src="/img/whatsapp.png"
            alt="whatsapp"
            width={200}
            height={100}
            className="fixed md:hidden bottom-2 right-2 rounded-full cursor-pointer"
          />
        </Link>
      </div>
    </>
  );
}
