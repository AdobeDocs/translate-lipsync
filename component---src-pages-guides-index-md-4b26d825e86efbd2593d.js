"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[569],{32205:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return u},default:function(){return p}});var t=n(58168),r=n(80045),i=(n(88763),n(15680)),o=n(83407);const d=["components"],u={},s={_frontmatter:u},l=o.A;function p(e){let{components:a}=e,n=(0,r.A)(e,d);return(0,i.mdx)(l,(0,t.A)({},s,n,{components:a,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"transcribe-api"},"Transcribe API"),(0,i.mdx)("p",null,"Quickstart commands to create a transcription from audio or video files."),(0,i.mdx)("h2",{id:"before-you-start"},"Before you start"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"You'll need a valid access token and client ID. See the ",(0,i.mdx)("a",{parentName:"li",href:"../getting_started/index.md"},"Authentication Guide")," for details."),(0,i.mdx)("li",{parentName:"ul"},"Upload your media files (audio or video) to ",(0,i.mdx)("a",{parentName:"li",href:"../getting_started/storage_solutions/index.md"},"your storage location and generate a pre-signed URL"),".")),(0,i.mdx)("h2",{id:"quickstart-commands"},"Quickstart commands"),(0,i.mdx)("p",null,"In the commands below:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Update the ",(0,i.mdx)("inlineCode",{parentName:"li"},"Authorization")," with the bearer access token."),(0,i.mdx)("li",{parentName:"ul"},"Update ",(0,i.mdx)("inlineCode",{parentName:"li"},"x-api-key")," with the client ID."),(0,i.mdx)("li",{parentName:"ul"},"Update ",(0,i.mdx)("inlineCode",{parentName:"li"},"url")," with the generated pre-signed URL for your input file.")),(0,i.mdx)("p",null,"You can try these curl requests directly in your terminal. Or you can use an HTTP client like ",(0,i.mdx)("a",{parentName:"p",href:"https://www.postman.com/"},"Postman"),"."),(0,i.mdx)("h3",{id:"transcribe-with-source-language-output"},"Transcribe with source language output"),(0,i.mdx)("h4",{id:"transcribe-video-with-source-language-output"},"Transcribe video with source language output"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},'curl --location \'https://audio-video-api.adobe.io/v1/transcribe\' \\\n--header \'Authorization: Bearer {AccessToken}\' \\\n--header \'Content-Type: application/json\' \\\n--header \'x-api-key: {ClientID}\' \\\n--data \'{\n  "video": {\n    "source": {\n         "url" : "{Presigned_URL}"\n    },\n    "mediaType": "video/mp4"\n  }\n}\'\n')),(0,i.mdx)("h4",{id:"transcribe-audio-with-source-language-output"},"Transcribe audio with source language output"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},'curl --location \'https://audio-video-api.adobe.io/v1/transcribe\' \\\n--header \'Authorization: Bearer {AccessToken}\' \\\n--header \'Content-Type: application/json\' \\\n--header \'x-api-key: {ClientID}\' \\\n--data \'{\n  "audio": {\n    "source": {\n         "url" : "{Presigned_URL}"\n    },\n    "mediaType": "audio/mp3"\n  }\n}\'\n')),(0,i.mdx)("h3",{id:"transcribe-with-target-language-output"},"Transcribe with target language output"),(0,i.mdx)("h4",{id:"transcribe-video-with-target-language-output"},"Transcribe video with target language output"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},'curl --location \'https://audio-video-api.adobe.io/v1/transcribe\' \\\n--header \'Authorization: Bearer {AccessToken}\' \\\n--header \'Content-Type: application/json\' \\\n--header \'x-api-key: {ClientID}\' \\\n--data \'{\n  "video": {\n    "source": {\n         "url" : "{Presigned_URL}"\n    },\n    "mediaType": "video/mp4"\n  },\n  "targetLocaleCodes": [\n    "{targetLocaleCode}"\n  ]\n}\'\n')),(0,i.mdx)("h4",{id:"transcribe-audio-with-target-language-output"},"Transcribe audio with target language output"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},'curl --location \'https://audio-video-api.adobe.io/v1/transcribe\' \\\n--header \'Authorization: Bearer {AccessToken}\' \\\n--header \'Content-Type: application/json\' \\\n--header \'x-api-key: {ClientID}\' \\\n--data \'{\n  "audio": {\n    "source": {\n         "url" : "{Presigned_URL}"\n    },\n    "mediaType": "audio/mp3"\n  },\n  "targetLocaleCodes": [\n    "{targetLocaleCode}"\n  ]\n}\'\n')),(0,i.mdx)("h3",{id:"transcribe-and-generate-captions-with-source-language-output"},"Transcribe and generate captions with source language output"),(0,i.mdx)("h4",{id:"transcribe-and-generate-captions-for-video-with-source-language-output"},"Transcribe and generate captions for video with source language output"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},'curl --location \'https://audio-video-api.adobe.io/v1/transcribe\' \\\n--header \'Authorization: Bearer {AccessToken}\' \\\n--header \'Content-Type: application/json\' \\\n--header \'x-api-key: {ClientID}\' \\\n--data \'{\n  "video": {\n    "source": {\n         "url" : "{Presigned_URL}"\n    },\n    "mediaType": "video/mp4"\n  },\n  "captions": {\n    "targetFormats": [\n      "{targetCaptionFormat}"\n    ]\n  }\n}\'\n')),(0,i.mdx)("h4",{id:"transcribe-and-generate-captions-for-audio-with-source-language-output"},"Transcribe and generate captions for audio with source language output"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},'curl --location \'https://audio-video-api.adobe.io/v1/transcribe\' \\\n--header \'Authorization: Bearer {AccessToken}\' \\\n--header \'Content-Type: application/json\' \\\n--header \'x-api-key: {ClientID}\' \\\n--data \'{\n  "audio": {\n    "source": {\n         "url" : "{Presigned_URL}"\n    },\n    "mediaType": "audio/mp3"\n  },\n  "captions": {\n    "targetFormats": [\n      "{targetCaptionFormat}"\n    ]\n  }\n}\'\n')),(0,i.mdx)("h2",{id:"check-the-result"},"Check the result"),(0,i.mdx)("p",null,"Note the job ID in the response and use the ",(0,i.mdx)("a",{parentName:"p",href:"get_result_quickstart.md"},"Get Result API")," to see the final result."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Sample response")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},'{\n    "jobId": "986fc222-1118-4242-b326-eb9873e3982f",\n    "statusUrl": "https://audio-video-api.adobe.io/v1/status/{jobID}"\n}\n')))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-index-md-4b26d825e86efbd2593d.js.map