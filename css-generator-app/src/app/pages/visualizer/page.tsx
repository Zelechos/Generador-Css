
const Page = () => {
  return (
    <div className="p-2 sm:ml-64 my-10 h-[35rem]">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 h-full">
        <div className="grid grid-cols-3 gap-4 h-full">
          <div className="flex items-center justify-center min-h-96 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
              Input your HTML CODE
            </p>
          </div>
          <div className="flex items-center justify-center min-h-96 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
              CSS CODE GENERATED
            </p>
          </div>
          <div className="flex items-center justify-center min-h-96 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
              Preview of Code HTML & CSS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
