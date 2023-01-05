import React from "react";

const compose = (...funcs) => (comp) => {
    return funcs.reduceRight((prevResult, f) => f(prevResult), comp)
}

export default compose;