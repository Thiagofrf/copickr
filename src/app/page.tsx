import ExampleCards from "@/components/exampleCards/exampleCards";
import Header from "@/components/header/header";


export default function Home() {
  return (
    <>
      <Header />
      <h1 className="text-center md:mt-56 text-5xl font-black text-fireEngineRed">
        Crie listas colaborativas com seus amigos
      </h1>
      <div className="mx-auto mt-24 max-w-screen-2xl">
        <ExampleCards
          flexDirection="flex-row"
          title="Restaurantes"
          text="Crie uma lista de restaurantes para ir. Adicione nome, link de reserva, cardápio, média de preço. Após marcar como feito, avalie o restaurante."
          image="/home-food.svg"
          alt="Ilustração de personagem comendo em um restaurante. Credits to: https://storyset.com/food"
          linkText="Criar minha lista de restaurantes"
        />
        <ExampleCards
          flexDirection="flex-row-reverse"
          title="Locais interessantes para ir"
          text="Crie uma lista de lugares interessantes para ir, seja na sua cidade ou em alguma viagem. Adicione nome, endereço, preços, etc."
          image="/home-travelling.svg"
          alt="Ilustração de personagem comendo em um restaurante. Credits to: https://storyset.com/people"
          linkText="Criar meu itinerário"
        />
        <ExampleCards
          flexDirection="flex-row"
          title="Filmes e séries"
          text="Crie uma lista de restaurantes para ir. Adicione nome, link de reserva, cardápio, média de preço. Após marcar como feito, avalie o restaurante."
          image="/home-movies.svg"
          alt="Ilustração de personagem comendo em um restaurante. Credits to: https://storyset.com/home"
          linkText="Criar minha lista para assistir"
        />
      </div>
    </> 
  )
}
