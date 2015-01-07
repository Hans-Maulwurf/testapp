<?php
\OCP\Util::addScript('testapp', 'script');
\OCP\Util::addStyle('testapp', 'style');
\OCP\Util::addScript('testapp', 'pizza.min');
\OCP\Util::addStyle('testapp', 'pizza');
\OCP\Util::addStyle('testapp', 'dependencies');
?>

<div id="app">
	<div id="app-navigation">
		<?php print_unescaped($this->inc('part.navigation')); ?>
		<?php print_unescaped($this->inc('part.settings')); ?>
	</div>

	<div id="app-content">
		<div id="app-content-wrapper">
			<?php print_unescaped($this->inc('part.content')); ?>
		</div>
	</div>
</div>
