import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import PageTitle from '../Components/PageTitle';

let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders with and without a title and/or subtitle prop", () => {
    act(() => {
        render(<PageTitle />, container);
    });
    expect(container.textContent).toBe("This is a mysterious page....and it does not have a subtitle");

    act(() => {
        render(<PageTitle title="New Page" />, container);
    });
    expect(container.textContent).toBe("New Page...and it does not have a subtitle");

    act(() => {
        render(<PageTitle title="Newer Page" subtitle="Old subtitle" />, container);
    });
    expect(container.textContent).toBe("Newer PageOld subtitle");
});