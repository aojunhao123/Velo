<template>
    <button class="ve-button" :class="buttonStyle" @click="handleClick">
        <div class="mask" v-if="buttonProps.disabled"></div>
        <slot></slot>
    </button>
</template>

<script setup lang='ts'>
import { computed, defineProps } from 'vue'
// 为组件设置名称
defineOptions({ name: "ve-button" })
// 定义组件的props
const buttonProps = defineProps({
    type: {
        type: String,
        default: 'default',
        validator: (val: string) => {
            return ['default', 'primary', 'success', 'info', 'warning', 'danger'].includes(val)
        }
    },
    size: {
        type: String,
        default: 'medium',
        validator: (val: string) => {
            return ['mini', 'medium', 'small'].includes(val)
        }
    },
    // 朴素按钮
    plain: {
        type: Boolean,
        default: false
    },
    // 圆角
    round: {
        type: Boolean,
        default: false
    },
    // 拟态
    soft: {
        type: Boolean,
        default: false
    },
    // 圆形
    circle: {
        type: Boolean,
        default: false
    },
    // 禁用
    disabled: {
        type: Boolean,
        default: false
    },
    // 图标
    icon: {
        type: String,
        default: ''
    }
})
// 组件样式
const buttonStyle = computed(() => {
    return [`ve-button--${buttonProps.type}`, `ve-button--${buttonProps.size}`, {
        'is-plain': buttonProps.plain,
        'is-round': buttonProps.round,
        'is-soft': buttonProps.soft,
        'is-circle': buttonProps.circle,
        'is-disabled': buttonProps.disabled
    }]
})
// 点击事件
const emit = defineEmits(['click'])
const handleClick = (e: Event) => {
    emit('click', e)
}
</script>

<style lang="scss" scoped>
@import './style.scss'
</style>