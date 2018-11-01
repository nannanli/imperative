/*
* This program and the accompanying materials are made available under the terms of the
* Eclipse Public License v2.0 which accompanies this distribution, and is available at
* https://www.eclipse.org/legal/epl-v20.html
*
* SPDX-License-Identifier: EPL-2.0
*
* Copyright Contributors to the Zowe Project.
*
*/

import { IHandlerParameters, ICommandHandler } from "../../../../../../../packages/index";
/**
 * Syntax test handler. Invoked if the syntax for the command is correct.
 * @export
 * @class ValidationTestCommand
 * @implements {ICommandHandler}
 */
export default class ValidationTestCommand implements ICommandHandler {
    public static readonly SUCCESS_MESSAGE = "Validation passed";
    public async process(commandParameters: IHandlerParameters) {
        commandParameters.response.console.log(ValidationTestCommand.SUCCESS_MESSAGE);
    }
}
