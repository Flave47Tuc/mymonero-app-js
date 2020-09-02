// Copyright (c) 2014-2019, MyMonero.com
//
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without modification, are
// permitted provided that the following conditions are met:
//
// 1. Redistributions of source code must retain the above copyright notice, this list of
//	conditions and the following disclaimer.
//
// 2. Redistributions in binary form must reproduce the above copyright notice, this list
//	of conditions and the following disclaimer in the documentation and/or other
//	materials provided with the distribution.
//
// 3. Neither the name of the copyright holder nor the names of its contributors may be
//	used to endorse or promote products derived from this software without specific
//	prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL
// THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
// STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF
// THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
"use strict"
//
const commonComponents_navigationBarButtons = require('../MMAppUICommonComponents/navigationBarButtons.web')
//
const Views__cssRules = require('../Views/cssRules.web')
const NamespaceName = "ThemeController"
const haveCSSRulesBeenInjected_documentKey = "__haveCSSRulesBeenInjected_"+NamespaceName
function cssRules_generatorFn(context)
{
	const cssRules =
	[
		`@font-face {
			font-family: Native-Regular;
			src: url(../../Theme/Resources/Native-Regular.otf") format("opentype");
		}`,
		`@font-face {
			font-family: Native-Light;
			src: url("../../Theme/Resources/Native-Light.otf") format("opentype");
		}`,
		`@font-face {
			font-family: Native-Bold;
			src: url("../../Theme/Resources/Native-Bold.otf") format("opentype");
		}`,
	]
	return cssRules
}
function __injectCSSRules_ifNecessary(context) 
{
	Views__cssRules.InjectCSSRules_ifNecessary(
		haveCSSRulesBeenInjected_documentKey, 
		cssRules_generatorFn,
		context
	)
}

//
class ThemeController
{
	constructor(options, context)
	{
		const self = this
		self.options = options
		self.context = context
		__injectCSSRules_ifNecessary(context)
	}

	// Delegation/Accessors/Protocol - Navigation Bar View - Buttons - Back button
	NavigationBarView__New_back_leftBarButtonView(clicked_fn)
	{
		const self = this
		const view = commonComponents_navigationBarButtons.New_LeftSide_BackButtonView(self.context)
		const layer = view.layer
		layer.addEventListener(
			"click",
			function(e)
			{
				e.preventDefault()
				if (view.isEnabled !== false) { // button is enabled
					clicked_fn()
				}
				return false
			}
		)
		return view
	}
}
module.exports = ThemeController
