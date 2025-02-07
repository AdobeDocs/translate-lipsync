"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[569],{32205:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return p}});var a=n(58168),i=n(80045),o=(n(88763),n(15680)),r=n(83407);const s=["components"],l={},d={_frontmatter:l},c=r.A;function p(e){let{components:t}=e,n=(0,i.A)(e,s);return(0,o.mdx)(c,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"authentication"},"Authentication"),(0,o.mdx)("p",null,"Server-to-server authentication credentials lets your application’s server generate access tokens and make API calls on behalf of your application. This is sometimes referred to as “two-legged OAuth”."),(0,o.mdx)("p",null,"For your application to generate an access token, an end-user does not need to sign in or provide consent to your application. Instead, your application can use its credentials (client id and secrets) to authenticate itself and generate access tokens. Your application can then use the generated access token to call Adobe APIs and services on its behalf."),(0,o.mdx)("h2",{id:"access-tokens"},"Access tokens"),(0,o.mdx)("p",null,"Each access token is valid for 24 hours. To adhere with OAuth best practices, you should generate a new token every 23 hours. Generating access tokens can be accomplished programmatically by sending a ",(0,o.mdx)("inlineCode",{parentName:"p"},"POST")," request to the following endpoint:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"curl -X POST 'https://ims-na1.adobelogin.com/ims/token/v3' \\\n-H 'Content-Type: application/x-www-form-urlencoded' \\\n-d 'grant_type=client_credentials&client_id={client_id}&client_secret={client_secret}&scope=openid,AdobeID,firefly_enterprise'\n")),(0,o.mdx)("p",null,"The required parameters are:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"client_id"),": Client ID"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"client_secret"),": Client secret"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"scope"),": ",(0,o.mdx)("inlineCode",{parentName:"li"},"openid"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"AdobeID"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"firefly_enterprise"))),(0,o.mdx)("p",null,"Automate your token generation by calling the IMS endpoint above using standard OAuth2 libraries. Using industry-standard libraries is the quickest and most secure way of integrating with OAuth. We recommend developers diligently pick the OAuth 2.0 library that works best for their application. Your teams' projects are likely leveraging OAuth libraries already to connect with other APIs. Use these libraries to automatically generate tokens when they expire."),(0,o.mdx)("p",null,"The token endpoint also returns an expiry date and the token itself (when decoded) contains the expiry time."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-index-md-abd115c7a88c889f791c.js.map