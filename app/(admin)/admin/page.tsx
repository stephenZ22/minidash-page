const AdminPage = () => {
  return (
    <>
      <div className="flex flex-1 flex-col h-screen p-4 gap-4">
        <h1 className="text-xl font-bold mb-2">Admin page</h1>

        {/* 上半部分：Users + Projects */}
        <div className="flex flex-1 gap-4">
          <div
            className="flex flex-1 bg-gray-200 border border-transparent rounded-lg shadow 
                          items-center justify-center 
                          hover:border-blue-500 hover:shadow-lg hover:scale-105
                          active:scale-95 transition-all duration-300"
          >
            Useraaaaaaaaa
          </div>

          <div
            className="flex flex-1 bg-gray-200 border border-transparent rounded-lg shadow 
                          items-center justify-center 
                          hover:border-blue-500 hover:shadow-lg hover:scale-105
                          active:scale-95 transition-all duration-300"
          >
            projectssssssssssssssss
          </div>
        </div>

        {/* 下半部分：Cards */}
        <div
          className="flex flex-1 bg-gray-200 border border-transparent rounded-lg shadow 
                        items-center justify-center 
                        hover:border-blue-500 hover:shadow-lg hover:scale-105
                        active:scale-95 transition-all duration-300"
        >
          <h1>Cards</h1>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
