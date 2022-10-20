import Button from "./Button";
import { spreadTable } from "../constants";
import { useState } from 'react';

function Table() {
    const [data, setData] = useState(spreadTable);
    return (
        <div className="flex flex-col font-poppins text-sm">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-4 inline-block min-w-full sm:px-6  lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full flex-row">
                            <thead className="border-b bg-dimWhite">
                                <tr>
                                    <th scope="col" className="text-sm font-medium text-black px-6 py-4">
                                        Forex
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-black px-6 py-4">
                                        Classic
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-black px-6 py-4">
                                        Platinum
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-black px-6 py-4">
                                        VIP
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-black px-6 py-4">

                                    </th>
                                    <th scope="col" className="text-sm font-medium text-black px-6 py-4">
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((home) => (
                                    <tr key={home.id} className="bg-white border-b">
                                        <td className="px-4 pl-12 py-4">{home.Forex} <br /> <span className="text-xs text-blue-600">{home.Currency}</span></td>
                                        <td>{home.Classic}</td>
                                        <td className="px-4 pl-12 py-4">{home.Platinum}</td>
                                        <td className="px-4 pl-12 py-4">{home.VIP}</td>
                                        <td className="px-4 pl-12 py-4"> <Button styles={`flex font-poppins inline-block px-1 py-0 border-2 border-blue-400 
        text-blue-400 font-medium text-xs leading-[12px] rounded-full
        focus:outline-none focus:ring-0 transition duration-150 ease-in-out`}
                                            text={`i`}
                                        /></td>
                                        <td className="px-4 pl-12 py-4"><Button styles={`flex font-poppins inline-block px-4 py-1 border-2 border-blue-400 
        text-blue-400 font-medium text-xs leading-tight rounded-md hover:bg-blue-700 hover:text-dimWhite
        focus:outline-none focus:ring-0 transition duration-150 ease-in-out`}
                                            text={`Login`}
                                        /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Table;



{/* <table
    <thead>
        <tr>
            <th>Forex</th>
            <th>classNameic</th>
            <th>Platinum</th>
            <th>VIP</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>jhshd</td>
            <td>jskdj</td>
            <td>jskdj</td>
            <td>jksdj</td>
        </tr>
    </tbody>
</table> */}