import MainMenu from "@/components/MainMenu";
import StatusBar from "@/components/StatusBar";
import TodoList from "@/components/TodoList";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-32 pt-20 pl-10 items-center max-md:gap-10 md:flex-row animate-fade-in">
      <StatusBar />
      <MainMenu />
      <div className="flex justify-center items-center min-h-screen bg-gray-100 w-full">
        <TodoList />
      </div>
    </div>
  );
};

export default HomePage;
