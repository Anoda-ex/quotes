<template>
    <div class="quote-container">
        <div v-if="quotesStore.loading" class="loading">
            <Spinner />
        </div>
        <div v-else-if="quotesStore.error" class="error">
            {{ quotesStore.error }}
            <IconRefetch class="icon" @click="quotesStore.fetchQuote" />

        </div>
        <div v-else-if="quotesStore.quote" class="quote-content">
            <p class="quote">"{{ quotesStore.quote.content }}"</p>
            <p class="author">- {{ quotesStore.quote.author }}</p>
            <div class="actions">
                <IconRefetch class="icon" @click="quotesStore.fetchQuote" />
                <IconCopy class="icon" @click="copyToClipboard" />
                <IconShare class="icon" @click="shareQuote" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import IconShare from "@/components/icons/IconShare.vue";
import IconRefetch from "@/components/icons/IconRefetch.vue";
import {useQuotesStore} from "@/stores/counter.js";
import IconCopy from "@/components/icons/IconCopy.vue";
import Spinner from "@/components/Spinner.vue";
const quotesStore = useQuotesStore();
const copyToClipboard = () => {
    const quote = quotesStore.quote

    if (quote) {
        console.log('copyToClipboard 2')
        navigator.clipboard.writeText(`"${quote.content}" - ${quote.author}`);
    }
};
const shareQuote = () => {
    const quote = quotesStore.quote
    if (quote) {
        const text = `"${quote.content}" - ${quote.author}`;
        const urlEncodedText = encodeURIComponent(text);
        const telegramUrl = `https://t.me/share/url?url=${urlEncodedText}`;
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${urlEncodedText}`;
        window.open(telegramUrl, '_blank');
        window.open(facebookUrl, '_blank');
    }
};
onMounted(quotesStore.fetchQuote);
</script>

<style scoped>
.quote-container {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}
.quote {
    font-size: 1.5em;
    margin-bottom: 10px;
}
.author {
    font-style: italic;
}
button {
    padding: 10px 20px;
    font-size: 1em;
    cursor: pointer;
}
.loading {
    font-size: 1.2em;
}
.error {
    color: var(--error);
    font-size: 1.2em;
    display: flex;
    align-items: center;
    gap: 20px;
}
.actions{
    display: flex;
    align-items: center;
    gap: 15px;
    justify-content: center;
    margin-top: 20px;
}
.icon {
    width: 30px !important;
    height: 30px !important;
    fill: var(--primary);
    cursor: pointer;

}
</style>
