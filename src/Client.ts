/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "./core";
import { CopilotIntegrations } from "./api/resources/copilotIntegrations/client/Client";
import { CopilotForYourEnterprise } from "./api/resources/copilotForYourEnterprise/client/Client";
import { AiAnimationGenerator } from "./api/resources/aiAnimationGenerator/client/Client";
import { AiArtQrCode } from "./api/resources/aiArtQrCode/client/Client";
import { GeneratePeopleAlsoAskSeoContent } from "./api/resources/generatePeopleAlsoAskSeoContent/client/Client";
import { CreateAPerfectSeoOptimizedTitleParagraph } from "./api/resources/createAPerfectSeoOptimizedTitleParagraph/client/Client";
import { WebSearchGpt3 } from "./api/resources/webSearchGpt3/client/Client";
import { ProfileLookupGpt3ForAiPersonalizedEmails } from "./api/resources/profileLookupGpt3ForAiPersonalizedEmails/client/Client";
import { BulkRunner } from "./api/resources/bulkRunner/client/Client";
import { Evaluator } from "./api/resources/evaluator/client/Client";
import { SyntheticDataMakerForVideosPdFs } from "./api/resources/syntheticDataMakerForVideosPdFs/client/Client";
import { LargeLanguageModelsGpt3 } from "./api/resources/largeLanguageModelsGpt3/client/Client";
import { SearchYourDocsWithGpt } from "./api/resources/searchYourDocsWithGpt/client/Client";
import { SmartGpt } from "./api/resources/smartGpt/client/Client";
import { SummarizeYourDocsWithGpt } from "./api/resources/summarizeYourDocsWithGpt/client/Client";
import { Functions } from "./api/resources/functions/client/Client";
import { LipSyncing } from "./api/resources/lipSyncing/client/Client";
import { LipsyncVideoWithAnyText } from "./api/resources/lipsyncVideoWithAnyText/client/Client";
import { CompareAiVoiceGenerators } from "./api/resources/compareAiVoiceGenerators/client/Client";
import { SpeechRecognitionTranslation } from "./api/resources/speechRecognitionTranslation/client/Client";
import { TextGuidedAudioGenerator } from "./api/resources/textGuidedAudioGenerator/client/Client";
import { CompareAiTranslations } from "./api/resources/compareAiTranslations/client/Client";
import { EditAnImageWithAiPrompt } from "./api/resources/editAnImageWithAiPrompt/client/Client";
import { CompareAiImageGenerators } from "./api/resources/compareAiImageGenerators/client/Client";
import { GenerateProductPhotoBackgrounds } from "./api/resources/generateProductPhotoBackgrounds/client/Client";
import { AiImageWithAFace } from "./api/resources/aiImageWithAFace/client/Client";
import { AiGeneratedPhotoFromEmailProfileLookup } from "./api/resources/aiGeneratedPhotoFromEmailProfileLookup/client/Client";
import { RenderImageSearchResultsWithAi } from "./api/resources/renderImageSearchResultsWithAi/client/Client";
import { AiBackgroundChanger } from "./api/resources/aiBackgroundChanger/client/Client";
import { CompareAiImageUpscalers } from "./api/resources/compareAiImageUpscalers/client/Client";
import { ChyronPlantBot } from "./api/resources/chyronPlantBot/client/Client";
import { LetterWriter } from "./api/resources/letterWriter/client/Client";
import { Embeddings } from "./api/resources/embeddings/client/Client";
import { PeopleAlsoAskAnswersFromADoc } from "./api/resources/peopleAlsoAskAnswersFromADoc/client/Client";
import { Misc } from "./api/resources/misc/client/Client";

export declare namespace GooeyClient {
    interface Options {
        environment: core.Supplier<string>;
        apiKey?: core.Supplier<core.BearerToken | undefined>;
        /** Override the Authorization header */
        authorization?: core.Supplier<string | undefined>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the Authorization header */
        authorization?: string | undefined;
    }
}

export class GooeyClient {
    constructor(protected readonly _options: GooeyClient.Options) {}

    protected _copilotIntegrations: CopilotIntegrations | undefined;

    public get copilotIntegrations(): CopilotIntegrations {
        return (this._copilotIntegrations ??= new CopilotIntegrations(this._options));
    }

    protected _copilotForYourEnterprise: CopilotForYourEnterprise | undefined;

    public get copilotForYourEnterprise(): CopilotForYourEnterprise {
        return (this._copilotForYourEnterprise ??= new CopilotForYourEnterprise(this._options));
    }

    protected _aiAnimationGenerator: AiAnimationGenerator | undefined;

    public get aiAnimationGenerator(): AiAnimationGenerator {
        return (this._aiAnimationGenerator ??= new AiAnimationGenerator(this._options));
    }

    protected _aiArtQrCode: AiArtQrCode | undefined;

    public get aiArtQrCode(): AiArtQrCode {
        return (this._aiArtQrCode ??= new AiArtQrCode(this._options));
    }

    protected _generatePeopleAlsoAskSeoContent: GeneratePeopleAlsoAskSeoContent | undefined;

    public get generatePeopleAlsoAskSeoContent(): GeneratePeopleAlsoAskSeoContent {
        return (this._generatePeopleAlsoAskSeoContent ??= new GeneratePeopleAlsoAskSeoContent(this._options));
    }

    protected _createAPerfectSeoOptimizedTitleParagraph: CreateAPerfectSeoOptimizedTitleParagraph | undefined;

    public get createAPerfectSeoOptimizedTitleParagraph(): CreateAPerfectSeoOptimizedTitleParagraph {
        return (this._createAPerfectSeoOptimizedTitleParagraph ??= new CreateAPerfectSeoOptimizedTitleParagraph(
            this._options
        ));
    }

    protected _webSearchGpt3: WebSearchGpt3 | undefined;

    public get webSearchGpt3(): WebSearchGpt3 {
        return (this._webSearchGpt3 ??= new WebSearchGpt3(this._options));
    }

    protected _profileLookupGpt3ForAiPersonalizedEmails: ProfileLookupGpt3ForAiPersonalizedEmails | undefined;

    public get profileLookupGpt3ForAiPersonalizedEmails(): ProfileLookupGpt3ForAiPersonalizedEmails {
        return (this._profileLookupGpt3ForAiPersonalizedEmails ??= new ProfileLookupGpt3ForAiPersonalizedEmails(
            this._options
        ));
    }

    protected _bulkRunner: BulkRunner | undefined;

    public get bulkRunner(): BulkRunner {
        return (this._bulkRunner ??= new BulkRunner(this._options));
    }

    protected _evaluator: Evaluator | undefined;

    public get evaluator(): Evaluator {
        return (this._evaluator ??= new Evaluator(this._options));
    }

    protected _syntheticDataMakerForVideosPdFs: SyntheticDataMakerForVideosPdFs | undefined;

    public get syntheticDataMakerForVideosPdFs(): SyntheticDataMakerForVideosPdFs {
        return (this._syntheticDataMakerForVideosPdFs ??= new SyntheticDataMakerForVideosPdFs(this._options));
    }

    protected _largeLanguageModelsGpt3: LargeLanguageModelsGpt3 | undefined;

    public get largeLanguageModelsGpt3(): LargeLanguageModelsGpt3 {
        return (this._largeLanguageModelsGpt3 ??= new LargeLanguageModelsGpt3(this._options));
    }

    protected _searchYourDocsWithGpt: SearchYourDocsWithGpt | undefined;

    public get searchYourDocsWithGpt(): SearchYourDocsWithGpt {
        return (this._searchYourDocsWithGpt ??= new SearchYourDocsWithGpt(this._options));
    }

    protected _smartGpt: SmartGpt | undefined;

    public get smartGpt(): SmartGpt {
        return (this._smartGpt ??= new SmartGpt(this._options));
    }

    protected _summarizeYourDocsWithGpt: SummarizeYourDocsWithGpt | undefined;

    public get summarizeYourDocsWithGpt(): SummarizeYourDocsWithGpt {
        return (this._summarizeYourDocsWithGpt ??= new SummarizeYourDocsWithGpt(this._options));
    }

    protected _functions: Functions | undefined;

    public get functions(): Functions {
        return (this._functions ??= new Functions(this._options));
    }

    protected _lipSyncing: LipSyncing | undefined;

    public get lipSyncing(): LipSyncing {
        return (this._lipSyncing ??= new LipSyncing(this._options));
    }

    protected _lipsyncVideoWithAnyText: LipsyncVideoWithAnyText | undefined;

    public get lipsyncVideoWithAnyText(): LipsyncVideoWithAnyText {
        return (this._lipsyncVideoWithAnyText ??= new LipsyncVideoWithAnyText(this._options));
    }

    protected _compareAiVoiceGenerators: CompareAiVoiceGenerators | undefined;

    public get compareAiVoiceGenerators(): CompareAiVoiceGenerators {
        return (this._compareAiVoiceGenerators ??= new CompareAiVoiceGenerators(this._options));
    }

    protected _speechRecognitionTranslation: SpeechRecognitionTranslation | undefined;

    public get speechRecognitionTranslation(): SpeechRecognitionTranslation {
        return (this._speechRecognitionTranslation ??= new SpeechRecognitionTranslation(this._options));
    }

    protected _textGuidedAudioGenerator: TextGuidedAudioGenerator | undefined;

    public get textGuidedAudioGenerator(): TextGuidedAudioGenerator {
        return (this._textGuidedAudioGenerator ??= new TextGuidedAudioGenerator(this._options));
    }

    protected _compareAiTranslations: CompareAiTranslations | undefined;

    public get compareAiTranslations(): CompareAiTranslations {
        return (this._compareAiTranslations ??= new CompareAiTranslations(this._options));
    }

    protected _editAnImageWithAiPrompt: EditAnImageWithAiPrompt | undefined;

    public get editAnImageWithAiPrompt(): EditAnImageWithAiPrompt {
        return (this._editAnImageWithAiPrompt ??= new EditAnImageWithAiPrompt(this._options));
    }

    protected _compareAiImageGenerators: CompareAiImageGenerators | undefined;

    public get compareAiImageGenerators(): CompareAiImageGenerators {
        return (this._compareAiImageGenerators ??= new CompareAiImageGenerators(this._options));
    }

    protected _generateProductPhotoBackgrounds: GenerateProductPhotoBackgrounds | undefined;

    public get generateProductPhotoBackgrounds(): GenerateProductPhotoBackgrounds {
        return (this._generateProductPhotoBackgrounds ??= new GenerateProductPhotoBackgrounds(this._options));
    }

    protected _aiImageWithAFace: AiImageWithAFace | undefined;

    public get aiImageWithAFace(): AiImageWithAFace {
        return (this._aiImageWithAFace ??= new AiImageWithAFace(this._options));
    }

    protected _aiGeneratedPhotoFromEmailProfileLookup: AiGeneratedPhotoFromEmailProfileLookup | undefined;

    public get aiGeneratedPhotoFromEmailProfileLookup(): AiGeneratedPhotoFromEmailProfileLookup {
        return (this._aiGeneratedPhotoFromEmailProfileLookup ??= new AiGeneratedPhotoFromEmailProfileLookup(
            this._options
        ));
    }

    protected _renderImageSearchResultsWithAi: RenderImageSearchResultsWithAi | undefined;

    public get renderImageSearchResultsWithAi(): RenderImageSearchResultsWithAi {
        return (this._renderImageSearchResultsWithAi ??= new RenderImageSearchResultsWithAi(this._options));
    }

    protected _aiBackgroundChanger: AiBackgroundChanger | undefined;

    public get aiBackgroundChanger(): AiBackgroundChanger {
        return (this._aiBackgroundChanger ??= new AiBackgroundChanger(this._options));
    }

    protected _compareAiImageUpscalers: CompareAiImageUpscalers | undefined;

    public get compareAiImageUpscalers(): CompareAiImageUpscalers {
        return (this._compareAiImageUpscalers ??= new CompareAiImageUpscalers(this._options));
    }

    protected _chyronPlantBot: ChyronPlantBot | undefined;

    public get chyronPlantBot(): ChyronPlantBot {
        return (this._chyronPlantBot ??= new ChyronPlantBot(this._options));
    }

    protected _letterWriter: LetterWriter | undefined;

    public get letterWriter(): LetterWriter {
        return (this._letterWriter ??= new LetterWriter(this._options));
    }

    protected _embeddings: Embeddings | undefined;

    public get embeddings(): Embeddings {
        return (this._embeddings ??= new Embeddings(this._options));
    }

    protected _peopleAlsoAskAnswersFromADoc: PeopleAlsoAskAnswersFromADoc | undefined;

    public get peopleAlsoAskAnswersFromADoc(): PeopleAlsoAskAnswersFromADoc {
        return (this._peopleAlsoAskAnswersFromADoc ??= new PeopleAlsoAskAnswersFromADoc(this._options));
    }

    protected _misc: Misc | undefined;

    public get misc(): Misc {
        return (this._misc ??= new Misc(this._options));
    }
}
