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

## CopilotForYourEnterprise

<details><summary><code>client.copilotForYourEnterprise.<a href="/src/api/resources/copilotForYourEnterprise/client/Client.ts">asyncVideoBots</a>({ ...params }) -> Gooey.VideoBotsPageResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.copilotForYourEnterprise.asyncVideoBots();
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

**request:** `Gooey.VideoBotsPageRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CopilotForYourEnterprise.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## AiArtQrCode

<details><summary><code>client.aiArtQrCode.<a href="/src/api/resources/aiArtQrCode/client/Client.ts">asyncArtQrCode</a>({ ...params }) -> Gooey.QrCodeGeneratorPageResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.aiArtQrCode.asyncArtQrCode({
    textPrompt: "text_prompt",
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

**request:** `Gooey.QrCodeGeneratorPageRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AiArtQrCode.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Evaluator

<details><summary><code>client.evaluator.<a href="/src/api/resources/evaluator/client/Client.ts">asyncBulkEval</a>({ ...params }) -> Gooey.BulkEvalPageResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.evaluator.asyncBulkEval({
    documents: ["documents"],
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

**request:** `Gooey.BulkEvalPageRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Evaluator.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## SmartGpt

<details><summary><code>client.smartGpt.<a href="/src/api/resources/smartGpt/client/Client.ts">asyncSmartGpt</a>({ ...params }) -> Gooey.SmartGptPageResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.smartGpt.asyncSmartGpt({
    inputPrompt: "input_prompt",
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

**request:** `Gooey.SmartGptPageRequest`

</dd>
</dl>

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

## SummarizeYourDocsWithGpt

<details><summary><code>client.summarizeYourDocsWithGpt.<a href="/src/api/resources/summarizeYourDocsWithGpt/client/Client.ts">asyncDocSummary</a>({ ...params }) -> Gooey.DocSummaryPageResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.summarizeYourDocsWithGpt.asyncDocSummary({
    documents: ["documents"],
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

**request:** `Gooey.DocSummaryPageRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SummarizeYourDocsWithGpt.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## LipSyncing

<details><summary><code>client.lipSyncing.<a href="/src/api/resources/lipSyncing/client/Client.ts">asyncLipsync</a>({ ...params }) -> Gooey.LipsyncPageResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lipSyncing.asyncLipsync();
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

**request:** `Gooey.LipsyncPageRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LipSyncing.RequestOptions`

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
