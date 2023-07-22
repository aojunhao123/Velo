<template>
    <div class="row">
        <h3>默认按钮</h3>
        <ve-button>button</ve-button>
        <ve-button type="primary">primary</ve-button>
        <ve-button type="success">success</ve-button>
        <ve-button type="info">info</ve-button>
        <ve-button type="warning">warning</ve-button>
        <ve-button type="danger">danger</ve-button>
    </div>
    <div class="row">
        <h3>拟态按钮</h3>
        <ve-button soft>button</ve-button>
        <ve-button type="primary" soft>primary</ve-button>
        <ve-button type="success" soft>success</ve-button>
        <ve-button type="info" soft>info</ve-button>
        <ve-button type="warning" soft>warning</ve-button>
        <ve-button type="danger" soft>danger</ve-button>
    </div>
    <div class="row">
        <h3>朴素按钮</h3>
        <ve-button plain>button</ve-button>
        <ve-button type="primary" plain>primary</ve-button>
        <ve-button type="success" plain>success</ve-button>
        <ve-button type="info" plain>info</ve-button>
        <ve-button type="warning" plain>warning</ve-button>
        <ve-button type="danger" plain>danger</ve-button>
    </div>
    <div class="row">
        <h3>圆角按钮</h3>
        <ve-button round>button</ve-button>
        <ve-button type="primary" round>primary</ve-button>
        <ve-button type="success" round>success</ve-button>
        <ve-button type="info" round>info</ve-button>
        <ve-button type="warning" round>warning</ve-button>
        <ve-button type="danger" round>danger</ve-button>
    </div>
    <div class="row">
        <h3>禁用按钮</h3>
        <ve-button disabled>button</ve-button>
        <ve-button type="primary" disabled>primary</ve-button>
        <ve-button type="success" disabled>success</ve-button>
        <ve-button type="info" disabled>info</ve-button>
        <ve-button type="warning" disabled>warning</ve-button>
        <ve-button type="danger" disabled>danger</ve-button>
    </div>
    <div class="row">
        <h3>不同尺寸</h3>
        <ve-button size="mini">mini</ve-button>
        <ve-button size="small">small</ve-button>
        <ve-button size="medium">medium</ve-button>
    </div>
    <div class="row">
        <h3>点击事件</h3>
        <ve-button @click="hello">点我一下</ve-button>
    </div>
</template>

<script setup lang='ts'>
// import { Button } from '@velo/components';
const hello = () => {
    alert('hello')
}
</script>

<style lang="scss" scoped>
.row {
    margin-left: 10px;

    .ve-button {
        margin-right: 10px;
    }

    .icon {
        margin-right: 3px;
    }
}
</style>

