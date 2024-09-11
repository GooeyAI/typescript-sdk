# Reference

<details><summary><code>client.<a href="/src/Client.ts">getBalance</a>() -> Gooey.BalanceResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.getBalance();
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

## Copilot

<details><summary><code>client.copilot.<a href="/src/api/resources/copilot/client/Client.ts">completion</a>(inputImages, inputDocuments, documents, inputGlossaryDocument, outputGlossaryDocument, inputFace, { ...params }) -> Gooey.VideoBotsPageOutput</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.copilot.completion(
    [fs.createReadStream("/path/to/your/file")],
    [fs.createReadStream("/path/to/your/file")],
    [fs.createReadStream("/path/to/your/file")],
    fs.createReadStream("/path/to/your/file"),
    fs.createReadStream("/path/to/your/file"),
    fs.createReadStream("/path/to/your/file"),
    {}
);
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

**inputImages:** `File[] | fs.ReadStream[] | Blob[] | undefined`

</dd>
</dl>

<dl>
<dd>

**inputDocuments:** `File[] | fs.ReadStream[] | Blob[] | undefined`

</dd>
</dl>

<dl>
<dd>

**documents:** `File[] | fs.ReadStream[] | Blob[] | undefined`

</dd>
</dl>

<dl>
<dd>

**inputGlossaryDocument:** `File | fs.ReadStream | Blob | undefined`

</dd>
</dl>

<dl>
<dd>

**outputGlossaryDocument:** `File | fs.ReadStream | Blob | undefined`

</dd>
</dl>

<dl>
<dd>

**inputFace:** `File | fs.ReadStream | Blob | undefined`

</dd>
</dl>

<dl>
<dd>

**request:** `Gooey.CopilotCompletionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Copilot.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
