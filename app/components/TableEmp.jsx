import React from 'react';

const TableEmp = ({ posts, tableName, DeleteEmp }) => {
    return (
    <div className="container mx-auto py-7 md:py-10 lg:py-24">
        <div className="container mx-auto py-7 md:py-10 lg:py-10">
            <h1>{tableName}</h1>
        </div>

        <table className="table-auto w-full border-collapse border border-gray-400">
            <thead>
                <tr>
                    <th scope="col" className="border border-gray-400 px-4 py-2">ID</th>
                    <th scope="col" className="border border-gray-400 px-4 py-2">NAME</th>
                    <th scope="col" className="border border-gray-400 px-4 py-2">ROLE</th>
                    <th scope="col" className="border border-gray-400 px-4 py-2">Delete?</th>
                </tr>
            </thead>
            <tbody>
                {posts.map((Emp) => (
                    <tr key={Emp.id} className="border border-gray-400">
                        <th scope="row" className="border border-gray-400 px-4 py-2">{Emp.id}</th>
                        <td className="border border-gray-400 px-4 py-2">{Emp.title}</td>
                        <td className="border border-gray-400 px-4 py-2">{Emp.body}</td>
                        <td className="border border-gray-400 px-4 py-2">
                            <button
                                type="button"
                                onClick={() => DeleteEmp(Emp.id)}
                                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                            >
                                Delete?
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>

    );
};

export default TableEmp;
