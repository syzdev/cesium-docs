import{_ as t,o as p,c as o,a as n,b as s,d as c,e as a,r as i}from"./app.f2d92805.js";const l={},u=a(`<p>\u9ED8\u8BA4\u89C6\u89D2\u5206\u4E3A\u4E24\u79CD\uFF1A</p><ol><li>\u521D\u59CB\u5316\u573A\u666F\u65F6\u7684\u89C6\u89D2\uFF1B</li><li>\u70B9\u51FB\u201CView Home\u201D\u6309\u94AE\u540E\u7684\u89C6\u89D2\u3002</li></ol><h2 id="\u4FEE\u6539\u521D\u59CB\u5316\u573A\u666F\u65F6\u7684\u89C6\u89D2" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u521D\u59CB\u5316\u573A\u666F\u65F6\u7684\u89C6\u89D2" aria-hidden="true">#</a> \u4FEE\u6539\u521D\u59CB\u5316\u573A\u666F\u65F6\u7684\u89C6\u89D2</h2><p>\u5E38\u7528\u7684\u65B9\u6CD5\u662F\u5728\u521D\u59CB\u5316<code>viewer</code>\u540E\uFF0C\u901A\u8FC7<code>flyTo</code>\u6216<code>setView</code>\u65B9\u6CD5\u4FEE\u6539\u521D\u59CB\u5316\u573A\u666F\u65F6\u7684\u89C6\u89D2\uFF0C\u5982\uFF1A</p><ol><li>\u4F7F\u7528<code>flyTo</code>\u65B9\u6CD5\u4FEE\u6539\u521D\u59CB\u5316\u573A\u666F\u7684\u89C6\u89D2\u4E3A\u5317\u4EAC\u7684\u4E0A\u65B9\uFF1A</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> viewer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Viewer</span><span class="token punctuation">(</span><span class="token string">&quot;cesiumContainer&quot;</span><span class="token punctuation">)</span>
viewer<span class="token punctuation">.</span>camera<span class="token punctuation">.</span><span class="token function">flyTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">destination</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token number">116.435314</span><span class="token punctuation">,</span> <span class="token number">39.960521</span><span class="token punctuation">,</span> <span class="token number">15000.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// \u5317\u4EAC\u7684\u5750\u6807</span>
  <span class="token literal-property property">orientation</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">heading</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toRadians</span><span class="token punctuation">(</span><span class="token number">20.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">pitch</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toRadians</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">90.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">roll</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u4F7F\u7528<code>setView</code>\u65B9\u6CD5\u4FEE\u6539\u521D\u59CB\u5316\u573A\u666F\u7684\u89C6\u89D2\u4E3A\u5317\u4EAC\u7684\u4E0A\u65B9\uFF1A</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> viewer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Viewer</span><span class="token punctuation">(</span><span class="token string">&quot;cesiumContainer&quot;</span><span class="token punctuation">)</span>
viewer<span class="token punctuation">.</span>camera<span class="token punctuation">.</span><span class="token function">setView</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">destination</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span><span class="token number">116.435314</span><span class="token punctuation">,</span> <span class="token number">39.960521</span><span class="token punctuation">,</span> <span class="token number">15000.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// \u5317\u4EAC\u7684\u5750\u6807</span>
  <span class="token literal-property property">orientation</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">heading</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toRadians</span><span class="token punctuation">(</span><span class="token number">20.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">pitch</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Math<span class="token punctuation">.</span><span class="token function">toRadians</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">90.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">roll</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4FEE\u6539\u70B9\u51FB-view-home-\u6309\u94AE\u540E\u7684\u89C6\u89D2" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u70B9\u51FB-view-home-\u6309\u94AE\u540E\u7684\u89C6\u89D2" aria-hidden="true">#</a> \u4FEE\u6539\u70B9\u51FB\u201CView Home\u201D\u6309\u94AE\u540E\u7684\u89C6\u89D2</h2>`,9),r={href:"https://syzdev.cn/cesium-docs/guide/interface-introduction.html#_2-%E8%BF%94%E5%9B%9E%E8%A7%86%E8%A7%92%E5%88%B0%E5%88%9D%E5%A7%8B%E4%BD%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"},k=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5C06\u89C6\u89D2\u4FEE\u6539\u4E3A\u4E2D\u56FD\u7684\u4E0A\u65B9</span>
<span class="token keyword">const</span> viewer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Viewer</span><span class="token punctuation">(</span><span class="token string">&quot;cesiumContainer&quot;</span><span class="token punctuation">)</span>
Cesium<span class="token punctuation">.</span>Camera<span class="token punctuation">.</span><span class="token constant">DEFAULT_VIEW_RECTANGLE</span> <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Rectangle<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span>
  <span class="token number">75.0</span><span class="token punctuation">,</span> <span class="token comment">// \u897F\u7ECF</span>
  <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token comment">// \u5357\u7EAC</span>
  <span class="token number">140.0</span><span class="token punctuation">,</span> <span class="token comment">// \u4E1C\u7ECF</span>
  <span class="token number">60.0</span> <span class="token comment">// \u5317\u7EAC</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),d=n("details",{class:"custom-container details"},[n("summary",{class:"custom-container-title"},"\u70B9\u51FB\u67E5\u770B\u5728\u7EBF\u793A\u4F8B\uFF1A\u4FEE\u6539\u70B9\u51FB\u201CView"),n("br"),n("iframe",{height:"600",width:"100%",src:"https://syzdev.cn/cesium-docs-demo/example/default-view.html",frameborder:"0"},`
 `)],-1),m=a(`<p>\u8FD8\u6709\u53E6\u4E00\u79CD\u65B9\u6CD5\uFF0C\u5176\u539F\u7406\u662F\u76D1\u542C<code>homeButton</code>\u7684\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u5F53\u70B9\u51FB\u8BE5\u6309\u94AE\u540E\uFF0C\u53D6\u6D88\u8BE5\u6309\u94AE\u7684\u9ED8\u8BA4\u884C\u4E3A\uFF0C\u6267\u884C\u81EA\u5B9A\u4E49\u884C\u4E3A\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> viewer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Viewer</span><span class="token punctuation">(</span><span class="token string">&quot;cesiumContainer&quot;</span><span class="token punctuation">)</span>
viewer<span class="token punctuation">.</span>homeButton<span class="token punctuation">.</span>viewModel<span class="token punctuation">.</span>command<span class="token punctuation">.</span>beforeExecute<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u53D6\u6D88\u8BE5\u6309\u94AE\u7684\u9ED8\u8BA4\u884C\u4E3A</span>
  e<span class="token punctuation">.</span>cancel <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token comment">// \u6267\u884C\u81EA\u5B9A\u4E49\u884C\u4E3A\uFF0C\u5C06\u89C6\u89D2\u4FEE\u6539\u4E3A\u4E2D\u56FD\u7684\u4E0A\u65B9</span>
  viewer<span class="token punctuation">.</span>camera<span class="token punctuation">.</span><span class="token function">flyTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">destination</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span>Rectangle<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span>
      <span class="token number">75.0</span><span class="token punctuation">,</span> <span class="token comment">// \u897F\u7ECF</span>
      <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token comment">// \u5357\u7EAC</span>
      <span class="token number">140.0</span><span class="token punctuation">,</span> <span class="token comment">// \u4E1C\u7ECF</span>
      <span class="token number">60.0</span> <span class="token comment">// \u5317\u7EAC</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function v(b,h){const e=i("ExternalLinkIcon");return p(),o("div",null,[u,n("p",null,[s("\u6839\u636E\u524D\u9762\u7AE0\u8282 "),n("a",r,[s("\u754C\u9762\u4ECB\u7ECD | Cesium\u5165\u95E8\u6559\u7A0B (syzdev.cn)"),c(e)]),s(" \u53EF\u77E5\uFF0C\u70B9\u51FB\u201C\u8FD4\u56DE\u89C6\u89D2\u5230\u521D\u59CB\u4F4D\u7F6E\u201D\u6309\u94AE\u540E\u89C6\u89D2\u4F1A\u9ED8\u8BA4\u5B9A\u4F4D\u5230\u7F8E\u56FD\u5BBE\u5915\u6CD5\u5C3C\u4E9A\u5DDE\u4E1C\u5357\u90E8\u7684\u8D39\u57CE\uFF08Philadelphia\uFF09\u4E0A\u65B9\uFF0C\u56E0\u4E3ACesium\u7684\u603B\u90E8\u4F4D\u4E8E\u8FD9\u91CC\uFF0C\u5F88\u591A\u65F6\u5019\u90FD\u662F\u9700\u8981\u624B\u52A8\u4FEE\u6539\u8BE5\u6309\u94AE\u7684\u9ED8\u8BA4\u884C\u4E3A\uFF0C\u4FEE\u6539\u7684\u65B9\u6CD5\u5982\u4E0B\uFF1A")]),k,d,m])}const w=t(l,[["render",v],["__file","default-view.html.vue"]]);export{w as default};
