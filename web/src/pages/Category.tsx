import { DataTable } from "../components/ui/Table";
import { useGetListCategory } from "../hooks/useGetListCategory";

const Category = () => {
  const { categories, isLoading, error } = useGetListCategory();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading categories</div>;

  const columns = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "description",
      header: "Description",
    },
    {
      accessorKey: "addIcon",
      header: "",
      cell: ({ getValue }: { getValue: any }) => getValue(),
    },
    {
      accessorKey: "trashIcon",
      header: "",
      cell: ({ getValue }: { getValue: any }) => getValue(),
    },
  ];

  return (
    <>
      <div className="rounded-lg bg-white p-4 shadow-md flex justify-between items-center">
        <div>
          <h1 className="mb-4 text-2xl font-semibold">Category</h1>
          <p>Quiz Categories</p>
        </div>

        <div className="cursor-pointer">
          <button>Add Category</button>
        </div>
      </div>

      <div className="rounded-lg bg-white p-4 shadow-md mt-[40px]">
        <DataTable columns={columns} data={categories} />
      </div>
    </>
  );
};

export default Category;
