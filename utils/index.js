export const FindByTestAttr = (component, attr) => {
    return component.find(`[data-test='${attr}']`);
}