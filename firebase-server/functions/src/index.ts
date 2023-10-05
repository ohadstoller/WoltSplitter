import OpenAI from "openai";
import * as logger from "firebase-functions/logger";
import {instructionWithExample} from "./instruction";
import {runWith} from "firebase-functions";
import {isNil} from "lodash";

export const matchBetweenProfiles = runWith({secrets: ["OPENAI_API_KEY"]}).
  https.onRequest(async (request, response) => {
    try {
      const apiKey = process.env.OPENAI_API_KEY;
      const openai = new OpenAI({
        apiKey,
      });

      const chatResponse = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages:
            [{"role": "system", "content": "You are a helpful assistant."},
              {
                "role": "user",
                "content": `${instructionWithExample} ${(request.body)} 
          provide your response in JSON format`,
              },
            ],
      });

      if (!isNil(chatResponse?.choices)) {
        response.send(chatResponse.choices[0].message.content);
      } else {
        response.send("Something went wrong with the assertion");
      }
    } catch (error) {
      logger.error(error, {structuredData: true});
      response.send(error);
    }
  });


