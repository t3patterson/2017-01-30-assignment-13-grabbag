let problemGroup = [
	//ex-08: getWordCount()
	{
	  //(SETUP-1)
		name: 'getWordCount',   							
		globalFunc: typeof getWordCount !== 'undefined' && getWordCount || 'undefined-function',
		runTests: function(){
			
			//(SETUP-4)
			let assertions = []

			var sampleText = "I'm tired of trying to find happiness through lies and self-medicating. If you need me, I'll be at the bar. The only thing I found in the fridge was a dead dove in a bag. But anyhoo, can you believe that the only reason the club is going under is because it's in a terrifying neighborhood? Oh, I'm sorry, I forgot… your wife is dead! They once called me the worst audience participant Cirque du Soleil ever had. \
			I need a fake passport, preferably to France. I like the way they think. Oh, COME ON! YOU'RE the Chiclet! Not me. Caw ca caw, caw ca caw, caw ca caw! It's ok. You be with Yam. So did you see the new Poof? His name's Gary and we don't need anymore lawsuits. If this were a Lifetime Moment of Truth movie, this would be our act break. But it wasn't. Michael, look, this has got to stop. I mean, flattered? Yes. Interested? Not tonight. \
			I'm foolish and I'm funny and I'm needy. Am I needy? Are you sure I'm not needy? 'Cause I feel needy sometimes. Obviously this blue part here is the land. \
			Let's see some bananas and nuts! This was a big get for God. They don't allow you to have bees in here. I want to cry so bad, but I don't think I can spare the moisture. No, Pop-pop does not get a treat, I just brought you a [bleep]ing pizza. It walked on my pillow! I'll buy you a hundred George Michaels that you can teach to drive! A group of British builders operating outside the O.C."

			var userOutput_1 = getWordCount(sampleText)

			let assert_1 = new Assertion({
				assertion_description: `<code> wordFrequencyObject.be === 3 </code>`,
				assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
				expected: 3,
				actual: userOutput_1.be
			})

		
		
			let assert_2 = new Assertion({
				assertion_description: `<code>wordFrequencyObject.need === 3 </code>`,
				assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
				expected: 3,
				actual: userOutput_1.need
			})
			
			let assert_3 = new Assertion({
				assertion_description: `<code>wordFrequencyObject.you === 3 </code>`,
				assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
				expected: 9,
				actual: wordFrequencyObject.you
			})
			
		


			
			//SETUP-5c
			assert_1.testAssertion(assert_1.actual, assert_1.expected)
			assert_2.testAssertion(assert_2.actual, assert_2.expected)
			assert_3.testAssertion(assert_3.actual, assert_3.expected)
			
			//SETUP-5d
			assertions.push(assert_1)
			assertions.push(assert_2)
			assertions.push(assert_3)
			


			return assertions
		},	
	},

	// ex-12: where()
	{
	  //(SETUP-1)
		name: 'where',   							
		globalFunc: typeof where !== 'undefined' && where || 'undefined-function',
		runTests: function(){
			
			//(SETUP-4)
			let assertions = []

			let plays = [
		       { title: "Cymbeline", author: "Shakespeare", year: 1623 },
		       { title: "The Tempest", author: "Shakespeare", year: 1623 },
		       { title: "Hamlet", author: "Shakespeare", year: 1603 },
		       { title: "1984", author: "George Orwell", year: 1949 },
		       { title: "A Midsummer Night's Dream", author: "Shakespeare", year: 1600 },
		       { title: "Macbeth", author: "Shakespeare", year: 1620 },
		       { title: "Death of a Salesman", author: "Arthur Miller", year: 1949 },
		       { title: "Two Blind Mice", author: "Samuel and Bella Spewack", year: 1949 }
		   ]

		   let userOutput_1 = where(plays, {author: "Shakespeare"})

			let assert_1 = new Assertion({
				assertion_description: `<code>sh8sprQuery instanceof Array</code>`,
				assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
				expected: true,
				actual: userOutput_1 instanceof Array
			})
		
			let assert_2 = new Assertion({
				assertion_description: `<code>sh8sprQuery.length === 5</code>`,
				assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
				expected: 5,
				actual: userOutput_1.length
			})

			let assert_3 = new Assertion({
				assertion_description: `<code>sh8sprQuery[0]['title'] === "Cymbeline"</code>`,
				assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
				expected: "Cymbeline",
				actual: userOutput_1[0]['title']
			})

			
		   let userOutput_2 = where(plays, {author: "Shakespeare", year: 1611})
			
			
			let assert_4 = new Assertion({
				assertion_description: `<code>sh8sprQuery2.length === 0</code>`,
				assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
				expected: 0,
				actual: userOutput_2.length
			})
			

			//-======---=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=
			
			
		   let userOutput_3 = where(plays, {author: "Shakespeare", year: 1623})

			let assert_5 = new Assertion({
				assertion_description: `<code>sh8sprQuery3.length === 2</code>`,
				assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
				expected: 2,
				actual: userOutput_3.length
			})

			let userOutput_4 = where(plays, {year: 1949})
 		   console.assert(  )

			let assert_6 = new Assertion({
				assertion_description: `<code>midCentPlays.length === 3</code>`,
				assertion_predicate:  function(arg1, arg2){ return arg1 === arg2 },
				expected: 3,
				actual: userOutput_4.length 
			})
			
			



			
			//SETUP-5c
			assert_1.testAssertion(assert_1.actual, assert_1.expected)
			assert_2.testAssertion(assert_2.actual, assert_2.expected)
			assert_3.testAssertion(assert_3.actual, assert_3.expected)
			assert_4.testAssertion(assert_4.actual, assert_4.expected)
			assert_5.testAssertion(assert_5.actual, assert_5.expected)
			assert_6.testAssertion(assert_6.actual, assert_6.expected)


			//SETUP-5d
			assertions.push(assert_1)
			assertions.push(assert_2)
			assertions.push(assert_3)
			assertions.push(assert_4)
			assertions.push(assert_5)
			assertions.push(assert_6)


			return assertions
		},	
	},
]
