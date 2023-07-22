import { defineComponent as a, computed as r, openBlock as n, createElementBlock as o, normalizeClass as u, unref as c, createCommentVNode as f, renderSlot as p } from "vue";
const m = {
  key: 0,
  class: "mask"
}, y = a({ name: "ve-button" }), k = /* @__PURE__ */ a({
  ...y,
  props: {
    type: {
      type: String,
      default: "default",
      validator: (t) => ["default", "primary", "success", "info", "warning", "danger"].includes(t)
    },
    size: {
      type: String,
      default: "medium",
      validator: (t) => ["mini", "medium", "small"].includes(t)
    },
    // 朴素按钮
    plain: {
      type: Boolean,
      default: !1
    },
    // 圆角
    round: {
      type: Boolean,
      default: !1
    },
    // 拟态
    soft: {
      type: Boolean,
      default: !1
    },
    // 圆形
    circle: {
      type: Boolean,
      default: !1
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: !1
    },
    // 图标
    icon: {
      type: String,
      default: ""
    }
  },
  emits: ["click"],
  setup(t, { emit: s }) {
    const e = t, i = r(() => [`ve-button--${e.type}`, `ve-button--${e.size}`, {
      "is-plain": e.plain,
      "is-round": e.round,
      "is-soft": e.soft,
      "is-circle": e.circle,
      "is-disabled": e.disabled
    }]), d = (l) => {
      s("click", l);
    };
    return (l, b) => (n(), o("button", {
      class: u(["ve-button", c(i)]),
      onClick: d
    }, [
      e.disabled ? (n(), o("div", m)) : f("", !0),
      p(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
export {
  k as default
};
