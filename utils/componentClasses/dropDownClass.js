export function dropDownClass({ position = "dropdown-start", hover = false, type = "menu", className = "" }) {
    const positionMapping = {
        bottomLeft: "dropdown-bottom dropdown-end",
        bottomRight: "dropdown-bottom",
        bottomCenter: "dropdown-bottom dropdown-center",
        topRight: "dropdown-top",
        topCenter: "dropdown-top dropdown-center",
        topLeft: "dropdown-top dropdown-end",
        leftBottom: "dropdown-left",
        leftCenter: "dropdown-left dropdown-center",
        leftTop: "dropdown-left dropdown-end",
        rightBottom: "dropdown-right",
        rightCenter: "dropdown-right dropdown-center",
        rightTop: "dropdown-right dropdown-end"
    }
    // type can be menu (in a navbar) or card (in a modal)
    const contentClass = type === "menu" ? (
        "dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
    ) : (
        "dropdown-content card card-sm bg-base-100 z-1 w-64 shadow-md"
    );
    const headerClass = `dropdown ${className} ${positionMapping[position]} ${hover ? "dropdown-hover" : ""}`
    return {
        headerClass: `${headerClass}`,
        labelClass: `btn m-1`,
        contentClass: contentClass
    };
}