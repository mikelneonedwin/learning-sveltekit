<script>
    export let data;
    const { guides } = data;
</script>

<div class="guides">
    <ul>
        {#each guides as guide}
            <li>
                <a href={`/guides/${guide.id}`}>{guide.title}</a>
            </li>
        {/each}
    </ul>
</div>

<style>
    .guides {
        margin-top: 20px;
    }
    ul {
        list-style-type: none;
        padding: 0%;
    }
    a {
        display: inline-block;
        margin-top: 10px;
        padding: 10px;
        border: 1px dotted rgba(225, 225, 225, 0.2);
    }
</style>