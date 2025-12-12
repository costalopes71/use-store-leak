<template>

<div>
    <h1>Hi! I am NOT leaking anymore!</h1>
</div>

</template>

<script setup lang="ts">
import { useStoreSafe } from '../pages/leaking-work-around/safeStoreSSR';
import { myStore } from '../store/dummy-store';

const myStoreRef = useStoreSafe(myStore);

console.log("DummyComponent store value:", myStoreRef.value);

</script>