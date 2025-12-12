<template>

<div>
    <h1>Hi! I am leaking!</h1>
</div>

</template>

<script setup lang="ts">
import { useStore } from '@nanostores/vue';
import { myStore } from '../store/dummy-store';

const myStoreRef = useStore(myStore);

console.log("DummyComponent store value:", myStoreRef.value);

</script>