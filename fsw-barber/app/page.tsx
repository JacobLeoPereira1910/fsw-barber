import { SearchIcon } from "lucide-react";
import Header from "./_components/ui/header";
import { Input } from "@/app/_components/ui/input";
import { Button } from "@/app/_components/ui/button";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Leonardo</h2>
        <p>Segunda-Feira, dia 27 de Fevereiro</p>
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Digite algo..." />
          <Button size="icon">
            <SearchIcon />
          </Button>
        </div>
        ]
        <div className="relative mt-6 h-37.5 w-full">
          <Image
            src="banner-01.png"
            alt="Descrição da imagem"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
