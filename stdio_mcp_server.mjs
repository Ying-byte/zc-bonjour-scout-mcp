#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "bonjour",
  boardId: "bonjour-official",
  domain: "bonjour.bio",
  npmName: "zc-bonjour-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
