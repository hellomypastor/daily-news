<script lang="ts">
  import { onMount } from "svelte";
  import "gitalk/dist/gitalk.css";
  import Gitalk from "gitalk";

  const config = {
    clientID: import.meta.env.PUBLIC_GITALK_CLIENT_ID,
    clientSecret: import.meta.env.PUBLIC_GITALK_CLIENT_SECRET,
    repo: import.meta.env.PUBLIC_GITALK_REPO,
    owner: import.meta.env.PUBLIC_GITALK_OWNER,
  };

  let unavailable = false;

  function commentId(pathname: string) {
    let hash = 2166136261;

    for (const character of pathname) {
      hash ^= character.charCodeAt(0);
      hash = Math.imul(hash, 16777619);
    }

    return `post-${(hash >>> 0).toString(16)}`;
  }

  onMount(() => {
    if (Object.values(config).some((value) => !value)) {
      unavailable = true;
      return;
    }

    const gitalk = new Gitalk({
      ...config,
      admin: [config.owner],
      id: commentId(location.pathname),
      distractionFreeMode: false,
    });
    gitalk.render("gitalk-container");
  });
</script>

<section class="comments" aria-label="Comments">
  {#if unavailable}
    <p class="comments__unavailable">
      Comments are temporarily unavailable.
    </p>
  {:else}
    <div id="gitalk-container"></div>
  {/if}
</section>

<style>
  .comments {
    margin-top: 3rem;
  }

  .comments__unavailable {
    padding: 1rem;
    border: 1px solid rgb(229 231 235);
    border-radius: 0.75rem;
    color: rgb(107 114 128);
    text-align: center;
  }
</style>
