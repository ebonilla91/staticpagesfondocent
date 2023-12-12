import{a as d,b as i}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-DQLWRJ6O.js";import{a as e}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-IDSWT3EJ.js";var o,a=e(()=>{"use strict";i();o={"template-viewer-widget-background":d`
	<div class="rmwidget widget-background" style="background-color: #<%=data.color%>">

        <% if (data.selectedType == 'picture') { %>
            <div class="picture-background" style="opacity: <%=data.opacity || 1%>;"></div>
        <% } %>

        <% if (data.selectedType == 'video') { %>
            <div class="video-background">
                <div class="video-container"></div>
                <div class="overlay"></div>
            </div>
		<% } %>

		<% if (data.selectedType == 'slideshow') { %>
			<div class="slideshow-background">
				<div class="slideshow-container"></div>
				<div class="slideshow-preload"></div>
			</div>
		<% } %>
	</div>
`}});export{o as a,a as b};
