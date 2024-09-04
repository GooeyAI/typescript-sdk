# Reference

<details><summary><code>client.<a href="/src/Client.ts">healthStatusGet</a>() -> unknown</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.healthStatusGet();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `GooeyClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

##

## CopilotIntegrations

<details><summary><code>client.copilotIntegrations.<a href="/src/api/resources/copilotIntegrations/client/Client.ts">videoBotsStreamCreate</a>({ ...params }) -> Gooey.CreateStreamResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.copilotIntegrations.videoBotsStreamCreate({
    integrationId: "integration_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Gooey.CreateStreamRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CopilotIntegrations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.copilotIntegrations.<a href="/src/api/resources/copilotIntegrations/client/Client.ts">videoBotsStream</a>(requestId) -> Gooey.VideoBotsStreamResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.copilotIntegrations.videoBotsStream("request_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CopilotIntegrations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Misc

<details><summary><code>client.misc.<a href="/src/api/resources/misc/client/Client.ts">getBalance</a>() -> Gooey.BalanceResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.misc.getBalance();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Misc.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.misc.<a href="/src/api/resources/misc/client/Client.ts">videoBotsBroadcast</a>({ ...params }) -> unknown</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.misc.videoBotsBroadcast({
    text: "text",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Gooey.BotBroadcastRequestModel`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Misc.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## BulkRunner

<details><summary><code>client.bulkRunner.<a href="/src/api/resources/bulkRunner/client/Client.ts">post</a>() -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bulkRunner.post();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `BulkRunner.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## SmartGpt

<details><summary><code>client.smartGpt.<a href="/src/api/resources/smartGpt/client/Client.ts">post</a>() -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.smartGpt.post();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `SmartGpt.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Functions

<details><summary><code>client.functions.<a href="/src/api/resources/functions/client/Client.ts">post</a>() -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.functions.post();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Functions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Embeddings

<details><summary><code>client.embeddings.<a href="/src/api/resources/embeddings/client/Client.ts">post</a>() -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.embeddings.post();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Embeddings.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
