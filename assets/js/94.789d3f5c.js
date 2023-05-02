(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{542:function(s,a,t){"use strict";t.r(a);var n=t(27),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("Mysql:\n127.0.0.1\nroot\n332211")]),s._v(" "),t("h2",{attrs:{id:"sql服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sql服务"}},[s._v("#")]),s._v(" SQL服务")]),s._v(" "),t("p",[s._v("使用下面命令查找到进程编号，然后再使用 sudo kill **** 关闭进程")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("ps aux "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("grep mysql\n")])])]),t("p",[s._v("##启动MySQL服务")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("server start sudo "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("local"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("MySQL"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("support"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("files"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mysql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("server start\n")])])]),t("p",[s._v("##停止MySQL服务")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("server stop sudo "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("local"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("support"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("files"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mysql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("server stop\n")])])]),t("p",[s._v("##重启MySQL服务")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("sudo "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("local"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("support"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("files"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mysql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("server restart\n")])])]),t("h2",{attrs:{id:"sql的常见命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sql的常见命令"}},[s._v("#")]),s._v(" SQL的常见命令")]),s._v(" "),t("p",[s._v("查看所有的数据库")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("show databases； \n")])])]),t("p",[s._v("打开指定 的库")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("use 库名； \n")])])]),t("p",[s._v("显示库中的所有表")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("show tables "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n")])])]),t("p",[s._v("显示指定库中的所有表")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("show tables from 库名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("创建表")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("create table "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("表名")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    字段名 字段类型"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("   \n    字段名 字段类型\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n")])])]),t("p",[s._v("查看指定表的结构")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("desc 表名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n")])])]),t("h3",{attrs:{id:"查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询"}},[s._v("#")]),s._v(" 查询：")]),s._v(" "),t("p",[s._v("显示表中的所有数据")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("select "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" from 表名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("根据条件显示表中的数据")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("select "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" from 表名【where 条件】【and 条件】\n")])])]),t("h3",{attrs:{id:"插入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#插入"}},[s._v("#")]),s._v(" 插入：")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("insert into "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("表名")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("字段名，…"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("values")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("值"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("，…"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h3",{attrs:{id:"修改"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改"}},[s._v("#")]),s._v(" 修改：")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("update 表名 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" 字段"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("新值"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("字段"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("新值【where 条件】【and 条件】\n")])])]),t("h3",{attrs:{id:"删除"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除"}},[s._v("#")]),s._v(" 删除：")]),s._v(" "),t("p",[s._v("单表的删除：")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" from 表名 【where 筛选条件】\n")])])]),t("p",[s._v("多表的删除：")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" 别名"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("，别名"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" from 表"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 别名"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("，表"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" 别名"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" where 连接条件 and 筛选条件"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h2",{attrs:{id:"表数据的增删改查"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#表数据的增删改查"}},[s._v("#")]),s._v(" 表数据的增删改查")]),s._v(" "),t("p",[s._v("1、查看视图的数据 ★")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("FROM")]),s._v(" my_v4"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("FROM")]),s._v(" my_v1 "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("WHERE")]),s._v(" last_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Partners'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("2、插入视图的数据")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("INTO")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("my_v4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("last_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("department_id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("VALUES")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'虚竹'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("90")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("3、修改视图的数据")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("UPDATE")]),s._v(" my_v4 "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SET")]),s._v(" last_name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'梦姑'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("WHERE")]),s._v(" last_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'虚竹'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("4、删除视图的数据")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DELETE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("FROM")]),s._v(" my_v4"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h2",{attrs:{id:"库的管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#库的管理"}},[s._v("#")]),s._v(" 库的管理：")]),s._v(" "),t("h3",{attrs:{id:"一、创建库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、创建库"}},[s._v("#")]),s._v(" 一、创建库")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("create database 库名\n")])])]),t("h3",{attrs:{id:"二、删除库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、删除库"}},[s._v("#")]),s._v(" 二、删除库")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("drop database 库名\n")])])]),t("h2",{attrs:{id:"表的管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#表的管理"}},[s._v("#")]),s._v(" 表的管理：")]),s._v(" "),t("h3",{attrs:{id:"_1-创建表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建表"}},[s._v("#")]),s._v(" 1.创建表")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TABLE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("IF")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NOT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("EXISTS")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("stuinfo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    stuId "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("INT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    stuName "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("VARCHAR")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    gender "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CHAR")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    bornDate "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DATETIME")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DESC")]),s._v(" studentinfo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h3",{attrs:{id:"_2-修改表-alter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改表-alter"}},[s._v("#")]),s._v(" 2.修改表 alter")]),s._v(" "),t("p",[s._v("语法：")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TABLE")]),s._v(" 表名 "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ADD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MODIFY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DROP")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CHANGE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("COLUMN")]),s._v(" 字段名 【字段类型】"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("#①修改字段名")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TABLE")]),s._v(" studentinfo "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CHANGE")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("COLUMN")]),s._v(" sex gender "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CHAR")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("#②修改表名")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TABLE")]),s._v(" stuinfo "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("RENAME")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TO")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  studentinfo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("#③修改字段类型和列级约束")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TABLE")]),s._v(" studentinfo "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MODIFY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("COLUMN")]),s._v(" borndate "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("#④添加字段")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TABLE")]),s._v(" studentinfo "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ADD")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("COLUMN")]),s._v(" email "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("VARCHAR")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" first"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("#⑤删除字段")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TABLE")]),s._v(" studentinfo "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DROP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("COLUMN")]),s._v(" email"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("#3.删除表")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DROP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TABLE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("IF")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("EXISTS")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" studentinfo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h2",{attrs:{id:"表逻辑的更新"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#表逻辑的更新"}},[s._v("#")]),s._v(" 表逻辑的更新")]),s._v(" "),t("p",[s._v("某些视图不能更新")]),s._v(" "),t("blockquote",[t("p",[s._v("包含以下关键字的sql语句：分组函数、distinct、group  by、having、union或者union all 常量视图")])]),s._v(" "),t("p",[s._v("Select中包含子查询join或from一个不能更新的视图\nwhere子句的子查询引用了from子句中的表")]),s._v(" "),t("h3",{attrs:{id:"方式一"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方式一"}},[s._v("#")]),s._v(" 方式一：")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("OR")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("REPLACE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("VIEW")]),s._v(" test_v7\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("AS")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SELECT")]),s._v(" last_name "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("FROM")]),s._v(" employees\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("WHERE")]),s._v(" employee_id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h3",{attrs:{id:"方式二"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方式二"}},[s._v("#")]),s._v(" 方式二:")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("VIEW")]),s._v(" test_v7\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("AS")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SELECT")]),s._v(" employee_id "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("FROM")]),s._v(" employees"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("FROM")]),s._v(" test_v7"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("视图的删除")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DROP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("VIEW")]),s._v(" test_v1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("test_v2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("test_v3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("视图结构的查看")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DESC")]),s._v(" test_v7"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SHOW")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("VIEW")]),s._v(" test_v7"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),s._v(" "),t("comment")],1)}),[],!1,null,null,null);a.default=e.exports}}]);