import {useState} from "react";

function Cell() {
    const [serviceList, setServiceList] = useState([{service: ""}]);
    let count;

    const handleCellChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...serviceList];
        list[index][name] = value;
        setServiceList(list);
    };

    const handleCellRemove = (index) => {
        const list = [...serviceList];
        list.splice(index, 1);
        setServiceList(list);
    };

    const handleCellAdd = () => {
        setServiceList([...serviceList, {service: ""}]);
    };
    return (
        <div className={"container"}>
            {serviceList.map((singleService, index) => (
                <form className="App" autoComplete="off">
                    <div className="form-field" id={"form-field"}>
                        <div key={index} className="services">
                            <div className="first-division">
                                {serviceList.length - 1 === index && serviceList.length < 4 && (
                                    <button
                                        type="button"
                                        onClick={handleCellAdd}
                                        className="add-btn"
                                    >
                                        <span>Add Cell</span>
                                    </button>
                                )}
                                {serviceList.length !== 1 && (
                                    <button
                                        type="button"
                                        onClick={() => handleCellRemove(index)}
                                        className="remove-btn"
                                    >
                                        <span>Remove Cell</span>
                                    </button>
                                )}
                                <div>
                                    <label htmlFor={"service"} id={"input"}>{index + 1}</label>
                                </div>
                                <textarea
                                    className={"cmd"}
                                    name="service"
                                    id="service"
                                    value={singleService.service}
                                    onChange={(e) => handleCellChange(e, index)}
                                    required
                                />
                                <div>
                                    <input type={"submit"} className={"btn btn-primary"} value={"Run cell"}
                                           onClick={function(){count = index}}/>
                                    <pre className={"output"} id={"output"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="res">
                        <h2>Output</h2>
                        {serviceList &&
                        serviceList.map((singleService, index) => (
                            <ul key={index}>
                                {singleService.service && <li>{singleService.service}</li>}
                            </ul>
                        ))}
                    </div>
                </form>
            ))}
        </div>
    );
}

export default Cell