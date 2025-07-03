const TaskList = ({ lista }) => {
    return (
        <>
            <h1>TaskList</h1>
            {lista.map((elemento, index) => (
                <div key={index}>{elemento}</div>
            ))}
        </>
    );
};

export default TaskList;