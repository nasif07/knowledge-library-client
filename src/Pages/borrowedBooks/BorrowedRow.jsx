

const BorrowedRow = ({borrowed, handleReturn}) => {

    const {category, email, name, image, returnDate, currentDate, _id} = borrowed;


   
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{category}</div>
                    </div>
                </div>
            </td>
            <td>
                {currentDate}
            </td>
            <td>{returnDate}</td>
            <th>
                <button onClick={() => handleReturn(_id)} className="btn btn-ghost btn-xs btn-outline">Return</button>
            </th>
        </tr>
    );
};

export default BorrowedRow;