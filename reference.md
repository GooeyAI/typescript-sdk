# Reference

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

<details><summary><code>client.copilotForYourEnterprise.<a href="/src/api/resources/copilotForYourEnterprise/client/Client.ts">asyncVideoBots</a>({ ...params }) -> Gooey.AsyncApiResponseModelV3</code></summary>
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

<details><summary><code>client.copilotForYourEnterprise.<a href="/src/api/resources/copilotForYourEnterprise/client/Client.ts">statusVideoBots</a>({ ...params }) -> Gooey.VideoBotsPageStatusResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.copilotForYourEnterprise.statusVideoBots({
    runId: "run_id",
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

**request:** `Gooey.StatusVideoBotsRequest`

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

## AiAnimationGenerator

<details><summary><code>client.aiAnimationGenerator.<a href="/src/api/resources/aiAnimationGenerator/client/Client.ts">asyncDeforumSd</a>({ ...params }) -> Gooey.AsyncApiResponseModelV3</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.aiAnimationGenerator.asyncDeforumSd({
    animationPrompts: [
        {
            frame: "frame",
            prompt: "prompt",
        },
    ],
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

**request:** `Gooey.DeforumSdPageRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AiAnimationGenerator.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.aiAnimationGenerator.<a href="/src/api/resources/aiAnimationGenerator/client/Client.ts">statusDeforumSd</a>({ ...params }) -> Gooey.DeforumSdPageStatusResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.aiAnimationGenerator.statusDeforumSd({
    runId: "run_id",
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

**request:** `Gooey.StatusDeforumSdRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AiAnimationGenerator.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## AiArtQrCode

<details><summary><code>client.aiArtQrCode.<a href="/src/api/resources/aiArtQrCode/client/Client.ts">asyncArtQrCode</a>({ ...params }) -> Gooey.AsyncApiResponseModelV3</code></summary>
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

<details><summary><code>client.aiArtQrCode.<a href="/src/api/resources/aiArtQrCode/client/Client.ts">statusArtQrCode</a>({ ...params }) -> Gooey.QrCodeGeneratorPageStatusResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.aiArtQrCode.statusArtQrCode({
    runId: "run_id",
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

**request:** `Gooey.StatusArtQrCodeRequest`

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

## GeneratePeopleAlsoAskSeoContent

<details><summary><code>client.generatePeopleAlsoAskSeoContent.<a href="/src/api/resources/generatePeopleAlsoAskSeoContent/client/Client.ts">asyncRelatedQnaMaker</a>({ ...params }) -> Gooey.AsyncApiResponseModelV3</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.generatePeopleAlsoAskSeoContent.asyncRelatedQnaMaker({
    searchQuery: "search_query",
    siteFilter: "site_filter",
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

**request:** `Gooey.RelatedQnAPageRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GeneratePeopleAlsoAskSeoContent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.generatePeopleAlsoAskSeoContent.<a href="/src/api/resources/generatePeopleAlsoAskSeoContent/client/Client.ts">statusRelatedQnaMaker</a>({ ...params }) -> Gooey.RelatedQnAPageStatusResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.generatePeopleAlsoAskSeoContent.statusRelatedQnaMaker({
    runId: "run_id",
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

**request:** `Gooey.StatusRelatedQnaMakerRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GeneratePeopleAlsoAskSeoContent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## CreateAPerfectSeoOptimizedTitleParagraph

<details><summary><code>client.createAPerfectSeoOptimizedTitleParagraph.<a href="/src/api/resources/createAPerfectSeoOptimizedTitleParagraph/client/Client.ts">asyncSeoSummary</a>({ ...params }) -> Gooey.AsyncApiResponseModelV3</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.createAPerfectSeoOptimizedTitleParagraph.asyncSeoSummary({
    searchQuery: "search_query",
    keywords: "keywords",
    title: "title",
    companyUrl: "company_url",
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

**request:** `Gooey.SeoSummaryPageRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreateAPerfectSeoOptimizedTitleParagraph.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.createAPerfectSeoOptimizedTitleParagraph.<a href="/src/api/resources/createAPerfectSeoOptimizedTitleParagraph/client/Client.ts">statusSeoSummary</a>({ ...params }) -> Gooey.SeoSummaryPageStatusResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.createAPerfectSeoOptimizedTitleParagraph.statusSeoSummary({
    runId: "run_id",
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

**request:** `Gooey.StatusSeoSummaryRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreateAPerfectSeoOptimizedTitleParagraph.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## WebSearchGpt3

<details><summary><code>client.webSearchGpt3.<a href="/src/api/resources/webSearchGpt3/client/Client.ts">asyncGoogleGpt</a>({ ...params }) -> Gooey.AsyncApiResponseModelV3</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webSearchGpt3.asyncGoogleGpt({
    searchQuery: "search_query",
    siteFilter: "site_filter",
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

**request:** `Gooey.GoogleGptPageRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebSearchGpt3.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.webSearchGpt3.<a href="/src/api/resources/webSearchGpt3/client/Client.ts">statusGoogleGpt</a>({ ...params }) -> Gooey.GoogleGptPageStatusResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webSearchGpt3.statusGoogleGpt({
    runId: "run_id",
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

**request:** `Gooey.StatusGoogleGptRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebSearchGpt3.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ProfileLookupGpt3ForAiPersonalizedEmails

<details><summary><code>client.profileLookupGpt3ForAiPersonalizedEmails.<a href="/src/api/resources/profileLookupGpt3ForAiPersonalizedEmails/client/Client.ts">asyncSocialLookupEmail</a>({ ...params }) -> Gooey.AsyncApiResponseModelV3</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.profileLookupGpt3ForAiPersonalizedEmails.asyncSocialLookupEmail({
    emailAddress: "email_address",
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

**request:** `Gooey.SocialLookupEmailPageRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProfileLookupGpt3ForAiPersonalizedEmails.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.profileLookupGpt3ForAiPersonalizedEmails.<a href="/src/api/resources/profileLookupGpt3ForAiPersonalizedEmails/client/Client.ts">statusSocialLookupEmail</a>({ ...params }) -> Gooey.SocialLookupEmailPageStatusResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.profileLookupGpt3ForAiPersonalizedEmails.statusSocialLookupEmail({
    runId: "run_id",
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

**request:** `Gooey.StatusSocialLookupEmailRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProfileLookupGpt3ForAiPersonalizedEmails.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## BulkRunner

<details><summary><code>client.bulkRunner.<a href="/src/api/resources/bulkRunner/client/Client.ts">asyncBulkRunner</a>({ ...params }) -> Gooey.AsyncApiResponseModelV3</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bulkRunner.asyncBulkRunner({
    documents: ["documents"],
    runUrls: ["run_urls"],
    inputColumns: {
        key: "value",
    },
    outputColumns: {
        key: "value",
    },
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

**request:** `Gooey.BulkRunnerPageRequest`

</dd>
</dl>

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

<details><summary><code>client.bulkRunner.<a href="/src/api/resources/bulkRunner/client/Client.ts">statusBulkRunner</a>({ ...params }) -> Gooey.BulkRunnerPageStatusResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bulkRunner.statusBulkRunner({
    runId: "run_id",
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

**request:** `Gooey.StatusBulkRunnerRequest`

</dd>
</dl>

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

## Evaluator

<details><summary><code>client.evaluator.<a href="/src/api/resources/evaluator/client/Client.ts">asyncBulkEval</a>({ ...params }) -> Gooey.AsyncApiResponseModelV3</code></summary>
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

<details><summary><code>client.evaluator.<a href="/src/api/resources/evaluator/client/Client.ts">statusBulkEval</a>({ ...params }) -> Gooey.BulkEvalPageStatusResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.evaluator.statusBulkEval({
    runId: "run_id",
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

**request:** `Gooey.StatusBulkEvalRequest`

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

## SyntheticDataMakerForVideosPdFs

<details><summary><code>client.syntheticDataMakerForVideosPdFs.<a href="/src/api/resources/syntheticDataMakerForVideosPdFs/client/Client.ts">asyncDocExtract</a>({ ...params }) -> Gooey.AsyncApiResponseModelV3</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.syntheticDataMakerForVideosPdFs.asyncDocExtract({
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

**request:** `Gooey.DocExtractPageRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SyntheticDataMakerForVideosPdFs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.syntheticDataMakerForVideosPdFs.<a href="/src/api/resources/syntheticDataMakerForVideosPdFs/client/Client.ts">statusDocExtract</a>({ ...params }) -> Gooey.DocExtractPageStatusResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.syntheticDataMakerForVideosPdFs.statusDocExtract({
    runId: "run_id",
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

**request:** `Gooey.StatusDocExtractRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SyntheticDataMakerForVideosPdFs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## LargeLanguageModelsGpt3

<details><summary><code>client.largeLanguageModelsGpt3.<a href="/src/api/resources/largeLanguageModelsGpt3/client/Client.ts">asyncCompareLlm</a>({ ...params }) -> Gooey.AsyncApiResponseModelV3</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.largeLanguageModelsGpt3.asyncCompareLlm();
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

**request:** `Gooey.CompareLlmPageRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LargeLanguageModelsGpt3.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.largeLanguageModelsGpt3.<a href="/src/api/resources/largeLanguageModelsGpt3/client/Client.ts">statusCompareLlm</a>({ ...params }) -> Gooey.CompareLlmPageStatusResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.largeLanguageModelsGpt3.statusCompareLlm({
    runId: "run_id",
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

**request:** `Gooey.StatusCompareLlmRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LargeLanguageModelsGpt3.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## SearchYourDocsWithGpt

<details><summary><code>client.searchYourDocsWithGpt.<a href="/src/api/resources/searchYourDocsWithGpt/client/Client.ts">asyncDocSearch</a>({ ...params }) -> Gooey.AsyncApiResponseModelV3</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.searchYourDocsWithGpt.asyncDocSearch({
    searchQuery: "search_query",
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

**request:** `Gooey.DocSearchPageRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SearchYourDocsWithGpt.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.searchYourDocsWithGpt.<a href="/src/api/resources/searchYourDocsWithGpt/client/Client.ts">statusDocSearch</a>({ ...params }) -> Gooey.DocSearchPageStatusResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.searchYourDocsWithGpt.statusDocSearch({
    runId: "run_id",
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

**request:** `Gooey.StatusDocSearchRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SearchYourDocsWithGpt.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## SmartGpt

<details><summary><code>client.smartGpt.<a href="/src/api/resources/smartGpt/client/Client.ts">asyncSmartGpt</a>({ ...params }) -> Gooey.AsyncApiResponseModelV3</code></summary>
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

<details><summary><code>client.smartGpt.<a href="/src/api/resources/smartGpt/client/Client.ts">statusSmartGpt</a>({ ...params }) -> Gooey.SmartGptPageStatusResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.smartGpt.statusSmartGpt({
    runId: "run_id",
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

**request:** `Gooey.StatusSmartGptRequest`

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

## SummarizeYourDocsWithGpt

<details><summary><code>client.summarizeYourDocsWithGpt.<a href="/src/api/resources/summarizeYourDocsWithGpt/client/Client.ts">asyncDocSummary</a>({ ...params }) -> Gooey.AsyncApiResponseModelV3</code></summary>
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

<details><summary><code>client.summarizeYourDocsWithGpt.<a href="/src/api/resources/summarizeYourDocsWithGpt/client/Client.ts">statusDocSummary</a>({ ...params }) -> Gooey.DocSummaryPageStatusResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.summarizeYourDocsWithGpt.statusDocSummary({
    runId: "run_id",
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

**request:** `Gooey.StatusDocSummaryRequest`

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

## Functions

<details><summary><code>client.functions.<a href="/src/api/resources/functions/client/Client.ts">asyncFunctions</a>({ ...params }) -> Gooey.AsyncApiResponseModelV3</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.functions.asyncFunctions();
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

**request:** `Gooey.FunctionsPageRequest`

</dd>
</dl>

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

<details><summary><code>client.functions.<a href="/src/api/resources/functions/client/Client.ts">statusFunctions</a>({ ...params }) -> Gooey.FunctionsPageStatusResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.functions.statusFunctions({
    runId: "run_id",
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

**request:** `Gooey.StatusFunctionsRequest`

</dd>
</dl>

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

## LipSyncing

<details><summary><code>client.lipSyncing.<a href="/src/api/resources/lipSyncing/client/Client.ts">asyncLipsync</a>({ ...params }) -> Gooey.AsyncApiResponseModelV3</code></summary>
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

<details><summary><code>client.lipSyncing.<a href="/src/api/resources/lipSyncing/client/Client.ts">statusLipsync</a>({ ...params }) -> Gooey.LipsyncPageStatusResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lipSyncing.statusLipsync({
    runId: "run_id",
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

**request:** `Gooey.StatusLipsyncRequest`

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

## LipsyncVideoWithAnyText

<details><summary><code>client.lipsyncVideoWithAnyText.<a href="/src/api/resources/lipsyncVideoWithAnyText/client/Client.ts">asyncLipsyncTts</a>({ ...params }) -> Gooey.AsyncApiResponseModelV3</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lipsyncVideoWithAnyText.asyncLipsyncTts({
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

**request:** `Gooey.LipsyncTtsPageRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LipsyncVideoWithAnyText.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.lipsyncVideoWithAnyText.<a href="/src/api/resources/lipsyncVideoWithAnyText/client/Client.ts">statusLipsyncTts</a>({ ...params }) -> Gooey.LipsyncTtsPageStatusResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lipsyncVideoWithAnyText.statusLipsyncTts({
    runId: "run_id",
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

**request:** `Gooey.StatusLipsyncTtsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LipsyncVideoWithAnyText.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## CompareAiVoiceGenerators

<details><summary><code>client.compareAiVoiceGenerators.<a href="/src/api/resources/compareAiVoiceGenerators/client/Client.ts">asyncTextToSpeech</a>({ ...params }) -> Gooey.AsyncApiResponseModelV3</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.compareAiVoiceGenerators.asyncTextToSpeech({
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

**request:** `Gooey.TextToSpeechPageRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompareAiVoiceGenerators.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.compareAiVoiceGenerators.<a href="/src/api/resources/compareAiVoiceGenerators/client/Client.ts">statusTextToSpeech</a>({ ...params }) -> Gooey.TextToSpeechPageStatusResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.compareAiVoiceGenerators.statusTextToSpeech({
    runId: "run_id",
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

**request:** `Gooey.StatusTextToSpeechRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompareAiVoiceGenerators.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## SpeechRecognitionTranslation

<details><summary><code>client.speechRecognitionTranslation.<a href="/src/api/resources/speechRecognitionTranslation/client/Client.ts">asyncAsr</a>({ ...params }) -> Gooey.AsyncApiResponseModelV3</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.speechRecognitionTranslation.asyncAsr({
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

**request:** `Gooey.AsrPageRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SpeechRecognitionTranslation.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.speechRecognitionTranslation.<a href="/src/api/resources/speechRecognitionTranslation/client/Client.ts">statusAsr</a>({ ...params }) -> Gooey.AsrPageStatusResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.speechRecognitionTranslation.statusAsr({
    runId: "run_id",
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

**request:** `Gooey.StatusAsrRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SpeechRecognitionTranslation.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## TextGuidedAudioGenerator

<details><summary><code>client.textGuidedAudioGenerator.<a href="/src/api/resources/textGuidedAudioGenerator/client/Client.ts">asyncText2Audio</a>({ ...params }) -> Gooey.AsyncApiResponseModelV3</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.textGuidedAudioGenerator.asyncText2Audio({
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

**request:** `Gooey.Text2AudioPageRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TextGuidedAudioGenerator.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.textGuidedAudioGenerator.<a href="/src/api/resources/textGuidedAudioGenerator/client/Client.ts">statusText2Audio</a>({ ...params }) -> Gooey.Text2AudioPageStatusResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.textGuidedAudioGenerator.statusText2Audio({
    runId: "run_id",
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

**request:** `Gooey.StatusText2AudioRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TextGuidedAudioGenerator.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## CompareAiTranslations

<details><summary><code>client.compareAiTranslations.<a href="/src/api/resources/compareAiTranslations/client/Client.ts">asyncTranslate</a>({ ...params }) -> Gooey.AsyncApiResponseModelV3</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.compareAiTranslations.asyncTranslate();
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

**request:** `Gooey.TranslationPageRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompareAiTranslations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.compareAiTranslations.<a href="/src/api/resources/compareAiTranslations/client/Client.ts">statusTranslate</a>({ ...params }) -> Gooey.TranslationPageStatusResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.compareAiTranslations.statusTranslate({
    runId: "run_id",
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

**request:** `Gooey.StatusTranslateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompareAiTranslations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## EditAnImageWithAiPrompt

<details><summary><code>client.editAnImageWithAiPrompt.<a href="/src/api/resources/editAnImageWithAiPrompt/client/Client.ts">asyncImg2Img</a>({ ...params }) -> Gooey.AsyncApiResponseModelV3</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.editAnImageWithAiPrompt.asyncImg2Img({
    inputImage: "input_image",
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

**request:** `Gooey.Img2ImgPageRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EditAnImageWithAiPrompt.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.editAnImageWithAiPrompt.<a href="/src/api/resources/editAnImageWithAiPrompt/client/Client.ts">statusImg2Img</a>({ ...params }) -> Gooey.Img2ImgPageStatusResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.editAnImageWithAiPrompt.statusImg2Img({
    runId: "run_id",
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

**request:** `Gooey.StatusImg2ImgRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EditAnImageWithAiPrompt.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## CompareAiImageGenerators

<details><summary><code>client.compareAiImageGenerators.<a href="/src/api/resources/compareAiImageGenerators/client/Client.ts">asyncCompareText2Img</a>({ ...params }) -> Gooey.AsyncApiResponseModelV3</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.compareAiImageGenerators.asyncCompareText2Img({
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

**request:** `Gooey.CompareText2ImgPageRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompareAiImageGenerators.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.compareAiImageGenerators.<a href="/src/api/resources/compareAiImageGenerators/client/Client.ts">statusCompareText2Img</a>({ ...params }) -> Gooey.CompareText2ImgPageStatusResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.compareAiImageGenerators.statusCompareText2Img({
    runId: "run_id",
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

**request:** `Gooey.StatusCompareText2ImgRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompareAiImageGenerators.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## GenerateProductPhotoBackgrounds

<details><summary><code>client.generateProductPhotoBackgrounds.<a href="/src/api/resources/generateProductPhotoBackgrounds/client/Client.ts">asyncObjectInpainting</a>({ ...params }) -> Gooey.AsyncApiResponseModelV3</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.generateProductPhotoBackgrounds.asyncObjectInpainting({
    inputImage: "input_image",
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

**request:** `Gooey.ObjectInpaintingPageRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GenerateProductPhotoBackgrounds.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.generateProductPhotoBackgrounds.<a href="/src/api/resources/generateProductPhotoBackgrounds/client/Client.ts">statusObjectInpainting</a>({ ...params }) -> Gooey.ObjectInpaintingPageStatusResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.generateProductPhotoBackgrounds.statusObjectInpainting({
    runId: "run_id",
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

**request:** `Gooey.StatusObjectInpaintingRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GenerateProductPhotoBackgrounds.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## AiImageWithAFace

<details><summary><code>client.aiImageWithAFace.<a href="/src/api/resources/aiImageWithAFace/client/Client.ts">asyncFaceInpainting</a>({ ...params }) -> Gooey.AsyncApiResponseModelV3</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.aiImageWithAFace.asyncFaceInpainting({
    inputImage: "input_image",
    textPrompt: "tony stark from the iron man",
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

**request:** `Gooey.FaceInpaintingPageRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AiImageWithAFace.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.aiImageWithAFace.<a href="/src/api/resources/aiImageWithAFace/client/Client.ts">statusFaceInpainting</a>({ ...params }) -> Gooey.FaceInpaintingPageStatusResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.aiImageWithAFace.statusFaceInpainting({
    runId: "run_id",
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

**request:** `Gooey.StatusFaceInpaintingRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AiImageWithAFace.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## AiGeneratedPhotoFromEmailProfileLookup

<details><summary><code>client.aiGeneratedPhotoFromEmailProfileLookup.<a href="/src/api/resources/aiGeneratedPhotoFromEmailProfileLookup/client/Client.ts">asyncEmailFaceInpainting</a>({ ...params }) -> Gooey.AsyncApiResponseModelV3</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.aiGeneratedPhotoFromEmailProfileLookup.asyncEmailFaceInpainting({
    emailAddress: "sean@dara.network",
    textPrompt: "winter's day in paris",
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

**request:** `Gooey.EmailFaceInpaintingPageRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AiGeneratedPhotoFromEmailProfileLookup.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.aiGeneratedPhotoFromEmailProfileLookup.<a href="/src/api/resources/aiGeneratedPhotoFromEmailProfileLookup/client/Client.ts">statusEmailFaceInpainting</a>({ ...params }) -> Gooey.EmailFaceInpaintingPageStatusResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.aiGeneratedPhotoFromEmailProfileLookup.statusEmailFaceInpainting({
    runId: "run_id",
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

**request:** `Gooey.StatusEmailFaceInpaintingRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AiGeneratedPhotoFromEmailProfileLookup.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## RenderImageSearchResultsWithAi

<details><summary><code>client.renderImageSearchResultsWithAi.<a href="/src/api/resources/renderImageSearchResultsWithAi/client/Client.ts">asyncGoogleImageGen</a>({ ...params }) -> Gooey.AsyncApiResponseModelV3</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.renderImageSearchResultsWithAi.asyncGoogleImageGen({
    searchQuery: "search_query",
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

**request:** `Gooey.GoogleImageGenPageRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RenderImageSearchResultsWithAi.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.renderImageSearchResultsWithAi.<a href="/src/api/resources/renderImageSearchResultsWithAi/client/Client.ts">statusGoogleImageGen</a>({ ...params }) -> Gooey.GoogleImageGenPageStatusResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.renderImageSearchResultsWithAi.statusGoogleImageGen({
    runId: "run_id",
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

**request:** `Gooey.StatusGoogleImageGenRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RenderImageSearchResultsWithAi.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## AiBackgroundChanger

<details><summary><code>client.aiBackgroundChanger.<a href="/src/api/resources/aiBackgroundChanger/client/Client.ts">asyncImageSegmentation</a>({ ...params }) -> Gooey.AsyncApiResponseModelV3</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.aiBackgroundChanger.asyncImageSegmentation({
    inputImage: "input_image",
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

**request:** `Gooey.ImageSegmentationPageRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AiBackgroundChanger.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.aiBackgroundChanger.<a href="/src/api/resources/aiBackgroundChanger/client/Client.ts">statusImageSegmentation</a>({ ...params }) -> Gooey.ImageSegmentationPageStatusResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.aiBackgroundChanger.statusImageSegmentation({
    runId: "run_id",
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

**request:** `Gooey.StatusImageSegmentationRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AiBackgroundChanger.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## CompareAiImageUpscalers

<details><summary><code>client.compareAiImageUpscalers.<a href="/src/api/resources/compareAiImageUpscalers/client/Client.ts">asyncCompareAiUpscalers</a>({ ...params }) -> Gooey.AsyncApiResponseModelV3</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.compareAiImageUpscalers.asyncCompareAiUpscalers({
    scale: 1,
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

**request:** `Gooey.CompareUpscalerPageRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompareAiImageUpscalers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.compareAiImageUpscalers.<a href="/src/api/resources/compareAiImageUpscalers/client/Client.ts">statusCompareAiUpscalers</a>({ ...params }) -> Gooey.CompareUpscalerPageStatusResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.compareAiImageUpscalers.statusCompareAiUpscalers({
    runId: "run_id",
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

**request:** `Gooey.StatusCompareAiUpscalersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompareAiImageUpscalers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ChyronPlantBot

<details><summary><code>client.chyronPlantBot.<a href="/src/api/resources/chyronPlantBot/client/Client.ts">asyncChyronPlant</a>({ ...params }) -> Gooey.AsyncApiResponseModelV3</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.chyronPlantBot.asyncChyronPlant({
    midiNotes: "C#1 B6 A2 A1 A3 A2",
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

**request:** `Gooey.ChyronPlantPageRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ChyronPlantBot.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chyronPlantBot.<a href="/src/api/resources/chyronPlantBot/client/Client.ts">statusChyronPlant</a>({ ...params }) -> Gooey.ChyronPlantPageStatusResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.chyronPlantBot.statusChyronPlant({
    runId: "run_id",
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

**request:** `Gooey.StatusChyronPlantRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ChyronPlantBot.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## LetterWriter

<details><summary><code>client.letterWriter.<a href="/src/api/resources/letterWriter/client/Client.ts">asyncLetterWriter</a>({ ...params }) -> Gooey.AsyncApiResponseModelV3</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.letterWriter.asyncLetterWriter({
    actionId: "action_id",
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

**request:** `Gooey.LetterWriterPageRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LetterWriter.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.letterWriter.<a href="/src/api/resources/letterWriter/client/Client.ts">statusLetterWriter</a>({ ...params }) -> Gooey.LetterWriterPageStatusResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.letterWriter.statusLetterWriter({
    runId: "run_id",
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

**request:** `Gooey.StatusLetterWriterRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LetterWriter.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Embeddings

<details><summary><code>client.embeddings.<a href="/src/api/resources/embeddings/client/Client.ts">asyncEmbeddings</a>({ ...params }) -> Gooey.AsyncApiResponseModelV3</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.embeddings.asyncEmbeddings({
    texts: ["texts"],
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

**request:** `Gooey.EmbeddingsPageRequest`

</dd>
</dl>

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

<details><summary><code>client.embeddings.<a href="/src/api/resources/embeddings/client/Client.ts">statusEmbeddings</a>({ ...params }) -> Gooey.EmbeddingsPageStatusResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.embeddings.statusEmbeddings({
    runId: "run_id",
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

**request:** `Gooey.StatusEmbeddingsRequest`

</dd>
</dl>

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

## PeopleAlsoAskAnswersFromADoc

<details><summary><code>client.peopleAlsoAskAnswersFromADoc.<a href="/src/api/resources/peopleAlsoAskAnswersFromADoc/client/Client.ts">asyncRelatedQnaMakerDoc</a>({ ...params }) -> Gooey.AsyncApiResponseModelV3</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.peopleAlsoAskAnswersFromADoc.asyncRelatedQnaMakerDoc({
    searchQuery: "search_query",
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

**request:** `Gooey.RelatedQnADocPageRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PeopleAlsoAskAnswersFromADoc.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.peopleAlsoAskAnswersFromADoc.<a href="/src/api/resources/peopleAlsoAskAnswersFromADoc/client/Client.ts">statusRelatedQnaMakerDoc</a>({ ...params }) -> Gooey.RelatedQnADocPageStatusResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.peopleAlsoAskAnswersFromADoc.statusRelatedQnaMakerDoc({
    runId: "run_id",
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

**request:** `Gooey.StatusRelatedQnaMakerDocRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PeopleAlsoAskAnswersFromADoc.RequestOptions`

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
