(() => {
	setTimeout(() => {
		setInterval(
			() =>
				document
					.querySelector<HTMLElement>(
						'[data-testid="confirmationSheetCancel"]',
					)
					?.click(),
			50,
		);

		const init = () => {
			const array = new Set<HTMLElement>();

			document
				.querySelectorAll('[data-testid="cellInnerDiv"]')
				.forEach(({ querySelectorAll }) =>
					querySelectorAll(
						'[dir="auto"] > span.css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0',
					).forEach(({ innerHTML }) =>
						innerHTML
							.split(" ")
							.forEach((word) =>
								[
									"acm",
									"ada",
									"api",
									"app",
									"c++",
									"ccc",
									"ces",
									"con",
									"css",
									"ctf",
									"def",
									"dev",
									"esc",
									"git",
									"gui",
									"hat",
									"i/o",
									"ide",
									"lua",
									"mvc",
									"orm",
									"php",
									"pug",
									"red",
									"seo",
									"sql",
									"tcl",
									"web",
									"xml",
									"xss",
									"apex",
									"bash",
									"beam",
									"cncf",
									"code",
									"conf",
									"cool",
									"csrf",
									"dart",
									"data",
									"deep",
									"file",
									"flag",
									"game",
									"goto",
									"html",
									"icse",
									"ieee",
									"java",
									"json",
									"life",
									"lisp",
									"loop",
									"pair",
									"perl",
									"qcon",
									"risk",
									"ruby",
									"rust",
									"site",
									"sxsw",
									"tech",
									"test",
									"tree",
									"type",
									"unit",
									"user",
									"view",
									"wwdc",
									"agile",
									"apple",
									"array",
									"basic",
									"build",
									"class",
									"cloud",
									"cobol",
									"craft",
									"cycle",
									"debug",
									"error",
									"event",
									"float",
									"gocon",
									"grace",
									"group",
									"image",
									"julia",
									"media",
									"merge",
									"point",
									"pycon",
									"query",
									"queue",
									"react",
									"sales",
									"scala",
									"scrum",
									"shell",
									"stack",
									"style",
									"swift",
									"amazon",
									"binary",
									"bsides",
									"coding",
									"commit",
									"delphi",
									"design",
									"devops",
									"docker",
									"driven",
									"elixir",
									"erlang",
									"events",
									"gitlab",
									"google",
									"groovy",
									"hackny",
									"hacktx",
									"hopper",
									"ignite",
									"kotlin",
									"lambda",
									"linked",
									"markup",
									"master",
									"matlab",
									"memory",
									"method",
									"mining",
									"mobile",
									"module",
									"native",
									"neural",
									"object",
									"prolog",
									"pydata",
									"python",
									"review",
									"scheme",
									"sheets",
									"social",
									"source",
									"string",
									"summit",
									"syntax",
									"system",
									"tester",
									"usenix",
									"visual",
									"writer",
									"100devs",
									"analyst",
									"angular",
									"auditor",
									"Boolean",
									"capture",
									"casting",
									"clojure",
									"comment",
									"connect",
									"control",
									"crystal",
									"devfest",
									"disrupt",
									"forgery",
									"fortran",
									"hackmit",
									"hashing",
									"haskell",
									"integer",
									"javaone",
									"kubecon",
									"laravel",
									"library",
									"machine",
									"manager",
									"mapping",
									"meetups",
									"natural",
									"network",
									"ng-conf",
									"node.js",
									"officer",
									"package",
									"pattern",
									"privacy",
									"project",
									"qcon.ai",
									"quality",
									"reality",
									"regular",
									"request",
									"restful",
									"runtime",
									"science",
									"service",
									"sorting",
									"strange",
									"support",
									"systems",
									"testing",
									"trainer",
									"various",
									"version",
									"virtual",
									"vueconf",
									"webtech",
									"analysis",
									"assembly",
									"back-end",
									"behavior",
									"business",
									"bytecode",
									"codemash",
									"compiler",
									"computer",
									"conflict",
									"congress",
									"consumer",
									"database",
									"delivery",
									"designer",
									"director",
									"embedded",
									"endpoint",
									"engineer",
									"facebook",
									"floating",
									"frontend",
									"function",
									"handling",
									"hardware",
									"language",
									"learning",
									"modeling",
									"notation",
									"o'reilly",
									'o"reilly',
									"oriented",
									"parallel",
									"platform",
									"robotics",
									"rubyconf",
									"rustconf",
									"security",
									"semantic",
									"shmoocon",
									"siggraph",
									"software",
									"strategy",
									"variable",
									"algorithm",
									"apachecon",
									"appdevcon",
									"architect",
									"assurance",
									"augmented",
									"branching",
									"cascading",
									"computing",
									"condition",
									"debugging",
									"developer",
									"devrelcon",
									"djangocon",
									"dockercon",
									"emberconf",
									"exception",
									"framework",
									"front-end",
									"fullstack",
									"graphical",
									"hypertext",
									"injection",
									"interface",
									"microsoft",
									"namespace",
									"railsconf",
									"re:invent",
									"recruiter",
									"recursion",
									"scientist",
									"scripting",
									"searching",
									"smalltalk",
									"solutions",
									"statement",
									"structure",
									"symposium",
									"technical",
									"warehouse",
									"waterfall",
									"worldwide",
									"artificial",
									"automation",
									"blockchain",
									"codemotion",
									"coldfusion",
									"compliance",
									"conference",
									"consultant",
									"continuous",
									"controller",
									"dependency",
									"deployment",
									"developers",
									"devopsdays",
									"elixirconf",
									"encryption",
									"expression",
									"extensible",
									"foundation",
									"functional",
									"hackathons",
									"hackzurich",
									"integrated",
									"javascript",
									"jupytercon",
									"kotlinconf",
									"kubernetes",
									"management",
									"networking",
									"operations",
									"powershell",
									"procedural",
									"processing",
									"programmer",
									"regression",
									"relational",
									"specialist",
									"structured",
									"techcrunch",
									"techmakers",
									"technician",
									"typescript",
									"abstraction",
									"application",
									"celebration",
									"codemasters",
									"compilation",
									"conditional",
									"conferences",
									"declaration",
									"development",
									"electronics",
									"engineering",
									"environment",
									"inheritance",
									"integration",
									"interactive",
									"interpreter",
									"objective-c",
									"objective-j",
									"performance",
									"procurement",
									"programming",
									"recognition",
									"refactoring",
									"scalability",
									"architecture",
									"asynchronous",
									"clojure/conj",
									"competitions",
									"cryptography",
									"intelligence",
									"manipulation",
									"optimization",
									"polymorphism",
									"techsylvania",
									"100daysofcode",
									"administrator",
									"authorization",
									"communication",
									"cybersecurity",
									"documentation",
									"encapsulation",
									"fullstackfest",
									"hackprinceton",
									"hacktoberfest",
									"international",
									"methodologies",
									"microservices",
									"visualization",
									"authentication",
									"cryptocurrency",
									"multithreading",
									"representative",
									"synchronization",
								].includes(
									word
										.toLocaleLowerCase()
										.replaceAll("#", "")
										.replaceAll("-", ""),
								)
									? querySelectorAll<HTMLElement>(
											'[data-testid*="-follow"]',
										).forEach((follow) => array.add(follow))
									: {},
							),
					),
				);

			let k = 0;

			for (const el of array) {
				k += 2000;

				setTimeout(() => {
					el.scrollIntoView();
					array.delete(el);
					el.click();
				}, 2000 + k);
			}

			array.size === 0 ? history.go(0) : {};
		};

		init();

		setInterval(() => window.scrollTo(0, window.scrollY + 500), 2000);
		setInterval(() => init(), 2000);
	}, 2000);
})();
