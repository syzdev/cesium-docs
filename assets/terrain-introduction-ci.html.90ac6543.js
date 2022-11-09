import{_ as n,o as a,c as e,e as t,a as s}from"./app.f2d92805.js";const i="/cesium-docs/assets/img/guide/ts-02.png",o="/cesium-docs/assets/img/guide/ts-07.gif",c={},r=t(`<h2 id="cesium-ion-\u5730\u5F62" tabindex="-1"><a class="header-anchor" href="#cesium-ion-\u5730\u5F62" aria-hidden="true">#</a> Cesium ion \u5730\u5F62</h2><p>\u52A0\u8F7DCesium ion\u63D0\u4F9B\u7684\u5730\u5F62\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>viewer<span class="token punctuation">.</span>terrainProvider <span class="token operator">=</span> Cesium<span class="token punctuation">.</span><span class="token function">createWorldTerrain</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u52A0\u8F7D\u540E\u7684\u6548\u679C\u5982\u4E0B\uFF0C\u80FD\u770B\u5230\u660E\u663E\u7684\u8D77\u4F0F\uFF1A</p><p><img src="`+i+`" alt="ts-02"></p><p>\u4F7F\u7528\u53C2\u6570<code>requestWaterMask</code>\u8FD8\u53EF\u4EE5\u4E3A\u865A\u62DF\u5730\u7403\u7684\u6D77\u9762\u6DFB\u52A0\u6D41\u52A8\u6548\u679C\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> viewer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Viewer</span><span class="token punctuation">(</span><span class="token string">&quot;cesiumContainer&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> terrainProvider <span class="token operator">=</span> Cesium<span class="token punctuation">.</span><span class="token function">createWorldTerrain</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">requestWaterMask</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u8BF7\u6C42\u6C34\u4F53\u6548\u679C\u6240\u9700\u8981\u7684\u6D77\u5CB8\u7EBF\u6570\u636E</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
viewer<span class="token punctuation">.</span>terrainProvider <span class="token operator">=</span> terrainProvider
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6548\u679C\u5982\u4E0B\uFF1A</p><p><img src="`+o+'" alt="ts-07"></p>',9),p=s("details",{class:"custom-container details"},[s("summary",{class:"custom-container-title"},"\u70B9\u51FB\u67E5\u770B\u5728\u7EBF\u793A\u4F8B\uFF1ACesium"),s("br"),s("iframe",{height:"600",width:"100%",src:"https://syzdev.cn/cesium-docs-demo/terrain/waterMask.html",frameborder:"0"},`
 `)],-1),l=[r,p];function u(d,m){return a(),e("div",null,l)}const v=n(c,[["render",u],["__file","terrain-introduction-ci.html.vue"]]);export{v as default};
