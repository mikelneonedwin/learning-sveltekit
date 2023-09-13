<script>
    export let data;
    const guide = data.guide;
</script>

<div class="guide">
    <h2>{guide.title}</h2>
    <p>{guide.body}</p>
</div>

<style>
    .guide {
        margin-top: 40px;
        padding: 10px;
        border: 1px dotted rgba(225, 225, 225, 0.2)
    }
</style>