import { SearchIcon } from "lucide-react";
import Header from "./_components/ui/header";
import { Input } from "@/app/_components/ui/input";
import { Button } from "@/app/_components/ui/button";
import Image from "next/image";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Badge } from "@/app/_components/ui/badge";
import { AvatarImage, Avatar } from "./_components/ui/avatar";

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

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner-01.png"
            alt="Descrição da imagem"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        <h2 className="text-bold mt-6 mb-3 text-xs text-gray-400 uppercase">
          Agendamentos
        </h2>

        <Card className="">
          <CardContent className="flex justify-between p-0">
            {/* DIV - Lado Esquerdo */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/logo.png"></AvatarImage>
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>
            </div>
            {/* DIV - Lado Direito */}

            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">05</p>
              <p className="text-sm">14:00</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
