import {
    __rest as l,
    __assign as r,
} from "../../../../../node_modules/tslib/tslib.es6.js";
import { jsx as t } from "react/jsx-runtime";
import { Children as e, isValidElement as i } from "react";
import a from "clsx";
import { StyledNav as s } from "./style.js";
var m = function (m) {
    var o = m.children,
        n = m.className,
        c = m.pills,
        p = m.align,
        f = m.vertical,
        u = m.fill,
        v = m.customStyle,
        y = l(m, [
            "children",
            "className",
            "pills",
            "align",
            "vertical",
            "fill",
            "customStyle",
        ]),
        d = e.map(o, function (l) {
            if (!i(l)) return l;
            var e = l;
            if (null !== e) {
                var a = e.type;
                if ("NavLink" === (a.displayName || a.name))
                    return t(e.type, r({}, e.props, { customStyle: v }));
            }
            return t(e.type, r({}, e.props));
        });
    return t(
        s,
        r(
            {
                className: a(n, "nav"),
                $pills: c,
                $align: p,
                $vertical: f,
                $fill: u,
                $customStyle: v,
            },
            y,
            { children: d }
        )
    );
};
export { m as default };
