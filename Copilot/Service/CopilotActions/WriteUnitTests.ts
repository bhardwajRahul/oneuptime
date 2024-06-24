import CopilotActionType from "Common/Types/Copilot/CopilotActionType";
import CopilotActionBase, {
  CopilotActionPrompt,
  CopilotActionRunResult,
  CopilotActionVars,
} from "./CopilotActionsBase";

export default class WriteUnitTests extends CopilotActionBase {
  public constructor() {
    super({
      copilotActionType: CopilotActionType.WRITE_UNIT_TESTS,
      acceptFileExtentions: [
        ".ts",
        ".js",
        ".tsx",
        ".jsx",
        ".py",
        ".go",
        ".java",
        ".c",
        ".cpp",
        ".cs",
        ".swift",
        ".php",
        ".rb",
        ".rs",
        ".kt",
        ".dart",
        ".sh",
        ".pl",
        ".lua",
        ".r",
        ".scala",
        ".ts",
        ".js",
        ".tsx",
        ".jsx",
      ],
    });
  }

  public override async isNoOperation(data: {
    vars: CopilotActionVars;
    result: CopilotActionRunResult;
  }): Promise<boolean> {
    if (data.result.code.includes("--all-good--")) {
      return true;
    }

    return false;
  }

  protected override async _getPrompt(): Promise<CopilotActionPrompt> {
    const prompt: string = `Write unit tests for this file.
    
    Here is the code. This is in {{fileLanguage}}: 
    
    {{code}}
                `;

    const systemPrompt: string = `You are an expert programmer. Here are your instructions:
- You will follow the instructions given by the user strictly.
- You will not deviate from the instructions given by the user.
- You will not change the code unnecessarily. For example you will not change the logic, quotes around strings, or functionality.`;

    return {
      prompt: prompt,
      systemPrompt: systemPrompt,
    };
  }
}