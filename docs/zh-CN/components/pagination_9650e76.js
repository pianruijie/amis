amis.define('docs/zh-CN/components/pagination.md', function(require, exports, module, define) {

  module.exports = {
    "title": "Pagination 分页组件",
    "description": null,
    "type": 0,
    "group": "⚙ 组件",
    "menuName": "Pagination",
    "icon": null,
    "order": 73,
    "html": "<div class=\"markdown-body\"><p>分页组件</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"service\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/crud/table\",\n    \"body\": [\n        {\n            \"type\": \"pagination\",\n            \"layout\": \"total,perPage,pager,go\",\n            \"mode\": \"normal\",\n            \"activePage\": 2,\n            \"lastPage\": 99999,\n            \"total\": 999,\n            \"perPage\": 10,\n            \"maxButtons\": 7,\n            \"showPerPage\": true,\n            \"perPageAvailable\": [10, 20, 50, 100],\n            \"showPageInput\": true,\n            \"disabled\": false\n\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"%E7%AE%80%E6%98%93%E6%A8%A1%E5%BC%8F\" href=\"#%E7%AE%80%E6%98%93%E6%A8%A1%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>简易模式</h3></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"service\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/crud/table\",\n    \"body\": [\n        {\n            \"type\": \"pagination\",\n            \"mode\": \"simple\",\n            \"activePage\": 2,\n            \"hasNext\": true\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>type</td>\n<td><code>string</code></td>\n<td><code>&quot;pagination&quot;</code></td>\n<td>指定为 Pagination 渲染器</td>\n</tr>\n<tr>\n<td>mode</td>\n<td><code>normal</code> | <code>simple</code></td>\n<td><code>normal</code></td>\n<td>迷你版本/简易版本 只显示左右箭头，配合 hasNext 使用</td>\n</tr>\n<tr>\n<td>layout</td>\n<td><code>string</code> | <code>string[]</code></td>\n<td><code>[&quot;pager&quot;]</code></td>\n<td>通过控制 layout 属性的顺序，调整分页结构布局</td>\n</tr>\n<tr>\n<td>maxButtons</td>\n<td><code>number</code> | <code>string</code></td>\n<td><code>5</code></td>\n<td>最多显示多少个分页按钮，最小为 5</td>\n</tr>\n<tr>\n<td>total</td>\n<td><code>number</code> | <code>string</code></td>\n<td></td>\n<td>总条数</td>\n</tr>\n<tr>\n<td>activePage</td>\n<td><code>number</code> | <code>string</code></td>\n<td><code>1</code></td>\n<td>当前页数</td>\n</tr>\n<tr>\n<td>perPage</td>\n<td><code>number</code> | <code>string</code></td>\n<td><code>10</code></td>\n<td>每页显示多条数据</td>\n</tr>\n<tr>\n<td>showPerPage</td>\n<td><code>boolean</code></td>\n<td>false</td>\n<td>是否展示 perPage 切换器 layout 和 showPerPage 都可以控制</td>\n</tr>\n<tr>\n<td>perPageAvailable</td>\n<td><code>number[]</code></td>\n<td><code>[10, 20, 50, 100]</code></td>\n<td>指定每页可以显示多少条</td>\n</tr>\n<tr>\n<td>showPageInput</td>\n<td><code>boolean</code></td>\n<td>false</td>\n<td>是否显示快速跳转输入框 layout 和 showPageInput 都可以控制</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td><code>boolean</code></td>\n<td>false</td>\n<td>是否禁用</td>\n</tr>\n<tr>\n<td>onPageChange</td>\n<td>page、perPage 改变时会触发</td>\n<td>(page: number, perPage: number) =&gt; void;</td>\n<td>分页改变触发</td>\n</tr>\n</tbody></table>\n<p>当前组件会对外派发以下事件，可以通过<code>onEvent</code>来监听这些事件，并通过<code>actions</code>来配置执行的动作，在<code>actions</code>中可以通过<code>${事件参数名}</code>或<code>${event.data.[事件参数名]}</code>来获取事件产生的数据，详细请查看<a href=\"../../docs/concepts/event-action\">事件动作</a>。</p>\n<blockquote>\n<p><code>[name]</code>表示当前组件绑定的名称，即<code>name</code>属性，如果没有配置<code>name</code>属性，则通过<code>value</code>取值。</p>\n<table>\n<thead>\n<tr>\n<th>事件名称</th>\n<th>事件参数</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>change</td>\n<td><code>[value]: object</code> 当前页码的值<br/></td>\n<td>当前页码值改变时触发</td>\n</tr>\n</tbody></table>\n</blockquote>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "简易模式",
          "fragment": "%E7%AE%80%E6%98%93%E6%A8%A1%E5%BC%8F",
          "fullPath": "#%E7%AE%80%E6%98%93%E6%A8%A1%E5%BC%8F",
          "level": 3
        },
        {
          "label": "属性表",
          "fragment": "%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
