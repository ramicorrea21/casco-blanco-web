import Image from "next/image";
import Link from "next/link";
export default function WspButton() {
  const phoneNumber = "+54 9 3517 56-4852";
  const message = "Hola, quiero enviar un mensaje."; 

  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

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
          className="fixed hidden md:block bottom-10 right-4 rounded-full cursor-pointer"
        />
        <Image
          src="/img/whatsapp.png"
          alt="whatsapp"
          width={200}
          height={100}
          className="fixed md:hidden bottom-10 right-4 rounded-full cursor-pointer"
        />
        </Link>
        
      </div>
    </>
  );
}
