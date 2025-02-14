"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[393],{17113:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return r},default:function(){return u}});var a=n(58168),d=n(80045),i=(n(88763),n(15680)),o=n(83407);const s=["components"],r={},l={_frontmatter:r},c=o.A;function u(e){let{components:t}=e,n=(0,d.A)(e,s);return(0,i.mdx)(c,(0,a.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"get-result-api"},"GET Result API"),(0,i.mdx)("p",null,"Quickstart commands to see the result of an async dub job."),(0,i.mdx)("h2",{id:"before-you-start"},"Before you start"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"You'll need a valid access token and client ID. See the ",(0,i.mdx)("a",{parentName:"li",href:"../getting_started/index.md"},"Authentication Guide")," for details."),(0,i.mdx)("li",{parentName:"ul"},"Upload your media files (audio or video) to ",(0,i.mdx)("a",{parentName:"li",href:"../getting_started/storage_solutions/index.md"},"your storage location and generate a pre-signed URL"),".")),(0,i.mdx)("h2",{id:"quickstart-commands"},"Quickstart commands"),(0,i.mdx)("p",null,"In the command, be sure to:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Update ",(0,i.mdx)("inlineCode",{parentName:"li"},"jobId")," with the ID returned in the response for the ADLS job."),(0,i.mdx)("li",{parentName:"ul"},"Update the ",(0,i.mdx)("inlineCode",{parentName:"li"},"Authorization")," with the bearer access token."),(0,i.mdx)("li",{parentName:"ul"},"Update ",(0,i.mdx)("inlineCode",{parentName:"li"},"x-api-key")," with the client ID.")),(0,i.mdx)("h3",{id:"get-status"},"Get status"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"curl --location 'https://audio-video-api.adobe.io/beta/status/{jobID}' \\\n--header 'Authorization: Bearer {AccessToken}' \\\n--header 'x-api-key: {ClientID}' \\\n--header 'Content-Type: application/json'\n")),(0,i.mdx)("p",null,"The status of the job can be:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},'"pending"')),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},'"running"')),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},'"failed"')),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},'"succeeded"')),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},'"partially_succeeded"'))),(0,i.mdx)("p",null,"If the status is ",(0,i.mdx)("inlineCode",{parentName:"p"},"succeeded"),", you'll see the result for the operation in a response like the example below:"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Dub job response example")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},'{\n    "jobId": "d639c2a7-4b18-44cc-9f9b-d4d90dc48595",\n    "status": "succeeded",\n    "outputs": [\n        {\n            "localeCode": "de-DE",\n            "audio": {\n                "mediaType": "audio/wav",\n                "destination": {\n                    "url": "https://auto-dubbing-stage-ue1.s3-accelerate.amazonaws.com/d639c2a7-4b18-44cc-9f9b-d4d90dc48595/signed_output_de_DE_0_soundliftmix.wav?response-content-disposition=attachment&AWSAccessKeyId=AKIATIXTMZXK45BXP3W2&Signature=okbACJJHLxFLbysdPhjbho9LFT4%3D&Expires=1725446974"\n                }\n            },\n            "video": {\n                "mediaType": "video/mp4",\n                "destination": {\n                    "url": "https://auto-dubbing-stage-ue1.s3-accelerate.amazonaws.com/d639c2a7-4b18-44cc-9f9b-d4d90dc48595/signed_output_de_DE_0_soundliftmix.mp4?response-content-disposition=attachment&AWSAccessKeyId=AKIATIXTMZXK45BXP3W2&Signature=7UK1%2FY%2FVTAWRUupKG%2FqmXJE%2F4OQ%3D&Expires=1725446974"\n                }\n            },\n            "transcript": {\n                "destination": {\n                    "url": "https://auto-dubbing-stage-ue1.s3-accelerate.amazonaws.com/d639c2a7-4b18-44cc-9f9b-d4d90dc48595/translation_de_DE.txt?response-content-disposition=attachment&AWSAccessKeyId=AKIATIXTMZXK45BXP3W2&Signature=FN%2Fg%2FM%2BrwLWi8Ve4JluaLX6KLkI%3D&Expires=1725446974"\n                }\n            }\n        },\n        {\n            "localeCode": "en-US",\n            "audio": {\n                "mediaType": "audio/wav",\n                "destination": {\n                    "url": "https://auto-dubbing-stage-ue1.s3-accelerate.amazonaws.com/d639c2a7-4b18-44cc-9f9b-d4d90dc48595/signed_output_en_US_0_soundliftmix.wav?response-content-disposition=attachment&AWSAccessKeyId=AKIATIXTMZXK45BXP3W2&Signature=TaN5jAs%2BPkxcGXzSprY762OrUZ4%3D&Expires=1725446974"\n                }\n            },\n            "video": {\n                "mediaType": "video/mp4",\n                "destination": {\n                    "url": "https://auto-dubbing-stage-ue1.s3-accelerate.amazonaws.com/d639c2a7-4b18-44cc-9f9b-d4d90dc48595/signed_output_en_US_0_soundliftmix.mp4?response-content-disposition=attachment&AWSAccessKeyId=AKIATIXTMZXK45BXP3W2&Signature=1NTrzLspbHdc3wai4hFomZnwVQQ%3D&Expires=1725446974"\n                }\n            },\n            "transcript": {\n                "destination": {\n                    "url": "https://auto-dubbing-stage-ue1.s3-accelerate.amazonaws.com/d639c2a7-4b18-44cc-9f9b-d4d90dc48595/translation_en_US.txt?response-content-disposition=attachment&AWSAccessKeyId=AKIATIXTMZXK45BXP3W2&Signature=KH46%2BTBaispa4FfILVO7bIojI7s%3D&Expires=1725446974"\n                }\n            }\n        }\n    ]\n}\n')),(0,i.mdx)("h2",{id:"verify-the-content-credentials"},"Verify the content credentials"),(0,i.mdx)("p",null,"To address concerns around content legitimacy, these content authentication steps should be used for AI-generated assets."),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Download the final output video/audio from the pre-signed URL in the successful response."),(0,i.mdx)("li",{parentName:"ol"},"Upload the file to the ",(0,i.mdx)("a",{parentName:"li",href:"https://contentcredentials.org/verify"},"Content Credentials website")," to check the credentials.")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-get-result-quickstart-md-2abdee90aab410e2d78b.js.map